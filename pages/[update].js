import { useRouter } from "next/router";
export default function DataDetails(){
    const router = useRouter()
    const data = router.query.update;
}