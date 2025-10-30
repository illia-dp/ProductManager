interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full mx-auto px-5 max-w-[375px] sm:px-12 sm:max-w-[768px] xl:px-16 xl:max-w-[1440px]">
      {children}
    </div>
  );
};

export default Container;
