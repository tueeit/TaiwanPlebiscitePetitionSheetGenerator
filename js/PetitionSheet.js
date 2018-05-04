
$(document).ready(function() {
    create_data_binding();
});

function copy_input_to_span(id) {
    $("input#" + id).keyup(function() {
        $("span#" + id).text($(this).val());
    })
}

function create_data_binding() {
    copy_input_to_span("id")
    copy_input_to_span("year")
    copy_input_to_span("month")
    copy_input_to_span("date")
    copy_input_to_span("county")
    copy_input_to_span("district")
    copy_input_to_span("villiage")
    copy_input_to_span("neighbor")
    copy_input_to_span("road")
    copy_input_to_span("section")
    copy_input_to_span("lane")
    copy_input_to_span("alley")
    copy_input_to_span("number")
    copy_input_to_span("floor")
    copy_input_to_span("part")

    $("button#export_pdf").click(export_pdf)

    new TwCitySelector({
        el: "div#address",
        elCounty: "select#county",
        elDistrict: "select#district",
    });

}

function export_pdf() {
    html2canvas($("div#sheet"), {
        onrendered: function(canvas) {
            var sheet_img = canvas.toDataURL('image/png');
            var pdf = new jsPDF('l', 'mm', 'a4');
            pdf.addImage(sheet_img, 'PNG', 0, 0);
            pdf.save('連署書.pdf');
        }
    });
}
