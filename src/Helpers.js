import { goto } from '$app/navigation';
export async function routeToHome() {
    await goto('/');
}