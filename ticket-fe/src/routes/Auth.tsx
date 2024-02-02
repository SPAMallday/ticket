export default function Auth() {
    const code = new URL(window.location.href).searchParams.get("code");

    return "auth";
}
