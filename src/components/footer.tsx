import { github, discord } from "../settings";
import { Obfuscated } from "../util/obfuscate";

function Footer() {
    return (
        <footer class="footer px-7 mt-auto mb-5 select-none flex items-center justify-between">
            <div>
                <Obfuscated>© Acustic 2024</Obfuscated> - {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export { Footer };
