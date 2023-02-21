import { useRouter } from "next/router";
import { useEffect } from "react";
import { arrayBuffer } from "stream/consumers";

export const useRedirest = (address: string) => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/' + address)
        },
            3000
        )
    }, [router])
}


























