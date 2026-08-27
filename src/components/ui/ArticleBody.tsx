import React from "react";

// Lightweight markdown renderer for long-form articles.
// Supports h2/h3/h4 with anchor ids, bullet and numbered lists,
// blockquotes, horizontal rules, bold, italics and links.

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function inline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let n = 0;

  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const token = m[0];

    if (token.startsWith("**")) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${n++}`} className="font-semibold text-ink">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      const label = token.slice(1, token.indexOf("]"));
      const href = token.slice(token.indexOf("(") + 1, -1);
      const external = href.startsWith("http");
      nodes.push(
        <a
          key={`${keyPrefix}-a-${n++}`}
          href={href}
          className="text-rust underline underline-offset-2 hover:text-burgundy"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {label}
        </a>,
      );
    }
    last = m.index + token.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function ArticleBody({ markdown }: { markdown: string }) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let para: string[] = [];
  let k = 0;

  const flushList = () => {
    if (!list.length || !listType) return;
    const items = list.map((li, i) => (
      <li key={i} className="leading-relaxed">
        {inline(li, `li-${k}-${i}`)}
      </li>
    ));
    out.push(
      listType === "ul" ? (
        <ul key={`l-${k++}`} className="my-6 list-disc space-y-2.5 pl-6 text-[17px] text-taupe marker:text-rust">
          {items}
        </ul>
      ) : (
        <ol key={`l-${k++}`} className="my-6 list-decimal space-y-2.5 pl-6 text-[17px] text-taupe marker:text-rust">
          {items}
        </ol>
      ),
    );
    list = [];
    listType = null;
  };

  const flushPara = () => {
    if (!para.length) return;
    const text = para.join(" ");
    out.push(
      <p key={`p-${k++}`} className="my-5 text-[17px] leading-[1.75] text-taupe">
        {inline(text, `p-${k}`)}
      </p>,
    );
    para = [];
  };

  const flushAll = () => {
    flushList();
    flushPara();
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const t = line.trim();

    if (!t) {
      flushAll();
      continue;
    }

    if (t === "---") {
      flushAll();
      out.push(<hr key={`hr-${k++}`} className="my-10 border-line" />);
      continue;
    }

    if (t.startsWith("#### ")) {
      flushAll();
      const text = t.slice(5);
      out.push(
        <h4 key={`h4-${k++}`} id={slugify(text)} className="mt-8 mb-3 font-display text-lg font-semibold text-ink">
          {inline(text, `h4-${k}`)}
        </h4>,
      );
      continue;
    }

    if (t.startsWith("### ")) {
      flushAll();
      const text = t.slice(4);
      out.push(
        <h3 key={`h3-${k++}`} id={slugify(text)} className="mt-10 mb-3 font-display text-2xl font-semibold text-ink">
          {inline(text, `h3-${k}`)}
        </h3>,
      );
      continue;
    }

    if (t.startsWith("## ")) {
      flushAll();
      const text = t.slice(3);
      out.push(
        <h2 key={`h2-${k++}`} id={slugify(text)} className="mt-14 mb-4 scroll-mt-28 font-display text-3xl font-semibold leading-tight text-ink">
          {inline(text, `h2-${k}`)}
        </h2>,
      );
      continue;
    }

    if (t.startsWith("> ")) {
      flushAll();
      out.push(
        <blockquote key={`q-${k++}`} className="my-7 border-l-4 border-cinnamon bg-paper px-6 py-4 text-[16px] leading-relaxed text-ink">
          {inline(t.slice(2), `q-${k}`)}
        </blockquote>,
      );
      continue;
    }

    const bullet = t.match(/^[-*]\s+(.*)$/);
    if (bullet) {
      flushPara();
      if (listType === "ol") flushList();
      listType = "ul";
      list.push(bullet[1].replace(/^\[ \]\s*/, ""));
      continue;
    }

    const numbered = t.match(/^\d+\.\s+(.*)$/);
    if (numbered) {
      flushPara();
      if (listType === "ul") flushList();
      listType = "ol";
      list.push(numbered[1]);
      continue;
    }

    flushList();
    para.push(t);
  }

  flushAll();
  return <div className="article-body">{out}</div>;
}
