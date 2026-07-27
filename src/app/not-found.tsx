import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-display-lg">This page took a different path</h1>
      <p className="mt-5 max-w-md text-taupe">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Back home</Button>
        <Button href="/contact" variant="outline">Contact us</Button>
      </div>
    </Container>
  );
}
