export type DynamicPageProps = {
  params: Promise<{ slug: string }> | undefined;
}; 