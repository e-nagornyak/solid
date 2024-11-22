import { Link } from "react-router-dom";
import { routes } from "@/lib/routes.ts";

export function HomePage() {
  return (
    <div className={"bg-gray-200 p-10 flex  justify-center"}>
      <Link
        className={
          "hover:underline p-3 rounded-md border border-blue-500 text-blue-500"
        }
        to={routes.payment}
      >
        Payment page
      </Link>
    </div>
  );
}
