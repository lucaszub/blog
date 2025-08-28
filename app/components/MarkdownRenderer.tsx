import "./mdx.css";

interface MarkdownRendererProps {
  html: string;
}

export default function MarkdownRenderer({ html }: MarkdownRendererProps) {
  return (
    <div className="prose prose-slate max-w-none mdx-content">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
