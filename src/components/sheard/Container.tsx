import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`container px-4 mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Container;
