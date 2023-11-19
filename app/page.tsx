import { redirect } from "next/navigation";

export default function HomePage() {
	// TODO: если пользователь уже авторизован, то нужно редиректить в гараж, если нет - на авторизацию или прелендинг
	redirect("/auth");
}