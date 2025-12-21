import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-secondary mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-blue-600 transition-colors shrink-0"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-500 shrink-0">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="text-gray-400">/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
