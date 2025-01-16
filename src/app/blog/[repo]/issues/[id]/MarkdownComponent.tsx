import { FC } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight  from "rehype-highlight";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ThemeType } from "@/app/utils/getTheme";


type MarkdownProps = {
  markdown: string;
  theme: ThemeType
};

const MarkdownComponent: FC<MarkdownProps> = ({ markdown , theme}) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      className={
        theme === "sahara" ? "text-black" : "text-white"
      }
      components={{

        code({ node, inline, className, children, ...props }: any) {
          return (
            <SyntaxHighlighter
              style={atomDark}
              language={"typescript"}
              PreTag="div"
              showLineNumbers={false}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          )
        },
      }}
    >
      {markdown}
    </Markdown>
  );
};

export default MarkdownComponent;
