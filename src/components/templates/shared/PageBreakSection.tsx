import React from "react";

/** 手动分页：预览中显示虚线标记，导出 PDF / 打印时从此处换页。 */
const PageBreakSection = () => (
  <div
    data-resume-section-id="page-break"
    style={{ breakBefore: "page", pageBreakBefore: "always" }}
  >
    <div className="page-break-line relative w-full py-2" aria-hidden="true">
      <div className="border-t-2 border-dashed border-sky-400" />
      <div className="absolute right-0 -top-4 text-xs text-sky-500">分页</div>
    </div>
  </div>
);

export default React.memo(PageBreakSection);
