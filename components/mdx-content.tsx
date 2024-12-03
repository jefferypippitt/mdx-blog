import { JSX, ComponentProps } from "react";
import { highlight } from "sugar-high";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import WeightCalculator from "./weight-calculator";


function Code(props: ComponentProps<"code">) {
  const { children, ...rest } = props;
  const codeHTML = highlight(children as string);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...rest} />;
}

export const components = {
  code: Code,
  WeightCalculator,
  Alert,
  AlertTitle,
  AlertDescription,
  Card,
  CardHeader,
  CardTitle,
  CardContent
};

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return <MDXRemote {...props} components={components} />;
}
