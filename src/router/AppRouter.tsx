import { Link, Route, Routes } from "react-router";
import Portfolio from "@/views/Portfolio";

function NotFound() {
    return (
        <main className="container min-vh-100 d-flex align-items-center py-5">
            <div className="row justify-content-center w-100">
                <div className="col-12 col-md-8 col-lg-6">
                    <section className="card text-center shadow-sm" aria-labelledby="not-found-title">
                        <div className="card-body p-4 p-md-5">
                            <h1 className="display-1 fw-bold text-primary mb-0">404</h1>
                            <h2 id="not-found-title" className="h3 mt-2">Page not found</h2>
                            <p className="text-body-secondary mb-4">
                                The page you are looking for does not exist.
                            </p>
                            <Link className="btn btn-primary" to="/">Return to homepage</Link>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/home" element={<Portfolio />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}