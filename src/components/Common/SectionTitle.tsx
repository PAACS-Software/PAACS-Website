const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  as = "h2", // New prop with default value
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  as?: "h1" | "h2" | "h3"; // New prop type
}) => {
  // Dynamic tag selection
  const Tag = as;

  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <Tag className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </Tag>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
