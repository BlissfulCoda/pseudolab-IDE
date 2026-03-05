const BlogId = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h4>Pseudocode Steps: {id}</h4>
    </div>
  );
};

export default BlogId;
