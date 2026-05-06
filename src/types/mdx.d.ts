declare module "*.mdx" {
  import type { ComponentProps } from "react";
  type MDXComponent = (props: ComponentProps<"div">) => JSX.Element;
  const MDXComponent: MDXComponent;
  export default MDXComponent;
}
