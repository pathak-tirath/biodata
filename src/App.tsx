import Header from "@/components/Header/Header";
import Index from "./components/Details";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";
import { useState } from "react";

const App = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = async () => {
    try {
      setIsDownloading(true);
      const content = document.getElementById("pdf-content");

      if (!content) {
        throw new Error("Content element not found");
      }

      // Create a wrapper with white background
      const wrapper = document.createElement("div");
      wrapper.style.backgroundColor = "#000";
      wrapper.style.color = "#fff";
      wrapper.style.position = "absolute";
      wrapper.style.left = "-9999px";
      wrapper.style.padding = "20px";

      // Inject a style element to adjust SVG/icon alignment
      const style = document.createElement("style");
      style.innerHTML = `
      svg, .lucide {
        vertical-align: middle !important;
        display: inline-block !important;
      }

        .animate-pulse{
           vertical-align: middle !important;
        display: inline-block !important;
        position: relative;
        top: 6px; /* Adjust this value as needed */
        }
      /* Nudge icons downward by 2px.
         Adjust the value if necessary. */
      svg {
        position: relative;
        top:1px;
      }
          `;
      wrapper.appendChild(style);

      // Clone the content
      const clonedContent = content.cloneNode(true);

      wrapper.appendChild(clonedContent);
      document.body.appendChild(wrapper);

      // Enhanced html2canvas configuration
      const canvas = await html2canvas(wrapper, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#000",
        logging: false,
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: wrapper.offsetWidth - 160,
        windowHeight: wrapper.offsetHeight,
        x: 0,
        y: 0,
      });

      // Clean up
      document.body.removeChild(wrapper);

      // PDF Generation
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;
      const imgHeight = pdfHeight;

      // Adjust image to fit within a single page without pagination
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight, "", "FAST");

      const filename = `biodata_${new Date().toISOString().slice(0, 10)}.pdf`;
      pdf.save(filename);
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="mt-10 border w-10/12 mx-auto bg-[#202020] text-white rounded-2xl sm:p-4">
      <div id="pdf-content" className="min-h-screen max-w-4xl mx-auto p-6">
        <Header />
        <Index />
      </div>
      <div className="text-center mt-8 flex justify-center mb-6">
        <button
          className={`border border-blue-700 rounded-2xl p-2 bg-blue-700 flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors ${
            isDownloading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={downloadPDF}
          disabled={isDownloading}
        >
          <span className="flex items-center gap-2">
            {isDownloading ? "Generating PDF..." : "Download BioData"}
            <Download className={isDownloading ? "animate-pulse" : ""} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;
