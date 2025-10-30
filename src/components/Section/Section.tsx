interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <div className="py-12">{children}</div>;
};

export default Section;
