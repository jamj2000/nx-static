import { redirect } from "next/navigation";
import { menu, slug } from "@/lib/utils"

export default function Home() {
  redirect( slug(menu[0]) )
}
