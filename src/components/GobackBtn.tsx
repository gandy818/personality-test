import Link from 'next/link';

export default function GobackBtn({ link, className }: { link: string; className?: string }) {
  return (
    <div className={`w-fit ${className}`}>
      <Link href={link}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3.99994 12L3.29294 11.293L2.58594 12L3.29294 12.707L3.99994 12ZM18.9999 13C19.2652 13 19.5195 12.8947 19.707 12.7071C19.8946 12.5196 19.9999 12.2652 19.9999 12C19.9999 11.7348 19.8946 11.4805 19.707 11.2929C19.5195 11.1054 19.2652 11 18.9999 11V13ZM9.29294 5.29303L3.29294 11.293L4.70694 12.707L10.7069 6.70703L9.29294 5.29303ZM3.29294 12.707L9.29294 18.707L10.7069 17.293L4.70694 11.293L3.29294 12.707ZM3.99994 13H18.9999V11H3.99994V13Z"
            fill="#1A1A1A"
          />
        </svg>
      </Link>
    </div>
  );
}
