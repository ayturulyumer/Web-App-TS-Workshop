import "./style.css";
import { config } from "./constants";
import { UserServices } from "./services/userServices";

const root = document.querySelector<HTMLDivElement>("#app");

const { baseUrl } = config;

const userService = new UserServices(baseUrl);

root!.innerHTML = `
<div>
<h1>Workshop</h1>
</div>
`;
