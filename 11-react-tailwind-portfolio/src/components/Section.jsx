function Section({ icon, children,sectionTitle }) {
  return (
    <div className="mb-12 mx-5">
      <div className="flex items-center my-3 mb-5">
        {icon}
        <h1 className="font-bold text-xl mx-2">{sectionTitle}</h1>
      </div>
      {children}
    </div>
  );
}

export default Section;
