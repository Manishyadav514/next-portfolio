import Link from "next/link";

const LinkComp = ({
  label,
  slug,
  newPageOpen = false,
  children,
}: {
  label?: string;
  slug: string;
  newPageOpen: boolean;
  children: any;
}) => {
  return (
    <span className="capitalize text-sm md:text-base text-gray-50  cursor-pointer hover:text-red-200">
      {children ? (
        <Link href={slug}>
          {children}
        </Link>
      ) : newPageOpen ? (
        <Link legacyBehavior href={slug} passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="capitalize text-sm md:text-base text-gray-50  cursor-pointer hover:text-teal-200"
          >
            {label}
          </a>
        </Link>
      ) : (
        <Link legacyBehavior href={slug}>
          {label}
        </Link>
      )}
    </span>
  );
};

export default LinkComp;
