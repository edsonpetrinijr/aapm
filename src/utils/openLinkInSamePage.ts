import { useRouter } from 'next/router';

export default function openLinkInSamePage(url: string, router: ReturnType<typeof useRouter>) {
    router.push(url);
};