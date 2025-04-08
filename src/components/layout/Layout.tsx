import { PropsWithChildren } from "react";
import Menu from "../shared/Menu";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Menu />
      <div className="mt-20 flex flex-col gap-32 p-20">{children}</div>
    </div>
  );
}
