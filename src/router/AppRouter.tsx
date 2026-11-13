import { Route, Routes } from "react-router";
import Portfolio from "@/views/Portfolio";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/home" element={<Portfolio />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    )
}