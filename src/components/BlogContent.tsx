"use client";

import MDEditor from "@uiw/react-md-editor";

interface BlogContentProps {
  content: string;
}

const BlogContent = ({ content }: BlogContentProps) => {
  return (
    <>
      <MDEditor.Markdown
        source={content}
        style={{ whiteSpace: "pre-wrap", paddingLeft: "12px" }}
      />
    </>
  );
};

export default BlogContent;
