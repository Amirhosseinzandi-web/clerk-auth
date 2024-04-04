import Link from "next/link";



const page = () => {
    return (
        <>
            <div>
                about page
            </div>
            <Link href={"/"}>home</Link>
        </>
    );
}

export default page;