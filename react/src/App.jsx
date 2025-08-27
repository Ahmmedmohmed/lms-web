import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
// import { HelmetProvider } from "react-helmet-async";

// style
import "./App.scss";
// import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";

// context
import { DarkModeProvider } from "./contexts/DarkModeContext";

//
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 60 * 1000,
            staleTime: 0,
        },
    },
});

// route
import Router from "./routes/Router";

// ui
import Preloader from "./ui/preloader/Preloader";

function App() {
    // navigator.mediaDevices
    //     .getDisplayMedia()
    //     .then((stream) => {
    //         alert("Screen recording detected!");
    //         window.location.href = "/blocked"; // إعادة توجيه المستخدم
    //     })
    //     .catch((err) => {
    //         console.log("User cancelled recording");
    //     });

    // ==============================================
    // document.addEventListener("copy", (e) => {
    //     e.preventDefault();
    //     alert("Copying is disabled!");
    // });

    // ==============================================
    // document.addEventListener("contextmenu", (e) => {
    //     e.preventDefault();
    //     alert("Right-click is disabled!");
    // });

    return (
        <>
            {/* <HelmetProvider> */}
            <DarkModeProvider>
                <QueryClientProvider client={queryClient}>
                    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
                    {/* <Preloader /> */}

                    <GlobalStyles />

                    <Router />

                    <Toaster
                        position="top-center"
                        gutter={12}
                        containerStyle={{ margin: "8px" }}
                        toastOptions={{
                            success: {
                                duration: 5000,
                            },
                            error: {
                                duration: 5000,
                            },
                            style: {
                                fontSize: "50px",
                                maxWidth: "500px",
                                padding: "16px 24px",
                                // backgroundColor: "var(--color-grey-0)",
                                color: "var(--color-grey-700)",
                                //  backgroundColor: "var(--back-sec-1)",
                                backgroundColor: "var(--back-box)",
                                boxShadow: "var(--box-shadow)",
                                border: "var(--border)",
                                borderRadius: "var(--border-radius-md)",
                            },
                        }}
                    />
                </QueryClientProvider>
            </DarkModeProvider>
            {/* </HelmetProvider> */}
        </>
    );
}

export default App;
