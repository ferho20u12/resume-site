import Card from "@src/shared/components/ui/Card";

export default function ResumePage() {
  const pdfUrl = "file:///C:/ferho20u12/Downloads/English%20Resume.pdf";

  return (
    <Card cardProps={{ nameSeccion: "resume"}}>
      <div className="flex flex-col gap-4 h-full">
        <div className="flex justify-end">
          <a
            href={pdfUrl}
            download
            className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:opacity-80 transition"
          >
            Download PDF
          </a>
        </div>

        <div className="flex-1 w-full rounded-xl overflow-hidden border">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title="Resume PDF"
          />
        </div>
      </div>
    </Card>
  );
}
