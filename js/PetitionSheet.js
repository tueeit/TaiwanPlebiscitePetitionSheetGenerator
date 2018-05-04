
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
    copy_input_to_span("neighbor")
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

    $("select#county").change(function() {
        county = $(this).val();
        county_name = county.substring(0, county.length - 1);
        county_type = county.substring(county.length - 1, county.length);

        if (county == '臺北市' || county == '新北市' || county == '臺中市' ||
            county == '桃園市' || county == '臺南市' || county == '高雄市') {
            $("span#province").text(county_name);
            $("div.province_1_circle").hide();
            $("div.province_2_circle").show();
            $("span#county").text('');
            $("div.county_1_circle").hide();
            $("div.county_2_circle").hide();
            return;
        }

        if (county == '金門縣' || county == '連江縣') {
            $("span#province").text('福建');
            $("div.province_1_circle").show();
            $("div.province_2_circle").hide();
            $("span#county").text(county_name);
            $("div.county_1_circle").show();
            $("div.county_2_circle").hide();
            return;
        }

        $("span#province").text('臺灣');
        $("div.province_1_circle").show();
        $("div.province_2_circle").hide();
        $("span#county").text(county_name);
        if (county_type == '縣') {
            $("div.county_1_circle").show();
            $("div.county_2_circle").hide();
        } else if (county_type == '市') {
            $("div.county_1_circle").hide();
            $("div.county_2_circle").show();
        } else {
            $("div.county_1_circle").hide();
            $("div.county_2_circle").hide();
        }
    })

    $("select#district").change(function() {
        district = $(this).val();
        district_name = district.substring(0, district.length - 1);
        district_type = district.substring(district.length - 1, district.length);

        if (district_type == '鄉') {
            $("span#district").text(district_name);
            $("div.district_1_circle").show();
            $("div.district_2_circle").hide();
            $("div.district_3_circle").hide();
            $("div.district_4_circle").hide();
        } else if (district_type == '鎮') {
            $("span#district").text(district_name);
            $("div.district_1_circle").hide();
            $("div.district_2_circle").show();
            $("div.district_3_circle").hide();
            $("div.district_4_circle").hide();
        } else if (district_type == '市') {
            $("span#district").text(district_name);
            $("div.district_1_circle").hide();
            $("div.district_2_circle").hide();
            $("div.district_3_circle").show();
            $("div.district_4_circle").hide();
        } else if (district_type == '區') {
            $("span#district").text(district_name);
            $("div.district_1_circle").hide();
            $("div.district_2_circle").hide();
            $("div.district_3_circle").hide();
            $("div.district_4_circle").show();
        } else {
            $("span#district").text(district);
            $("div.district_1_circle").hide();
            $("div.district_2_circle").hide();
            $("div.district_3_circle").hide();
            $("div.district_4_circle").hide();
        }
    })

    $("input#villiage").keyup(function() {
        villiage = $(this).val();
        villiage_name = villiage.substring(0, villiage.length - 1);
        villiage_type = villiage.substring(villiage.length - 1, villiage.length);

        if (villiage_type == '村') {
            $("span#villiage").text(villiage_name);
            $("div.villiage_1_circle").show();
            $("div.villiage_2_circle").hide();
        } else if (villiage_type == '里') {
            $("span#villiage").text(villiage_name);
            $("div.villiage_1_circle").hide();
            $("div.villiage_2_circle").show();
        } else {
            $("span#villiage").text(villiage);
            $("div.villiage_1_circle").hide();
            $("div.villiage_2_circle").hide();
        }
    })

    $("input#road").keyup(function() {
        road = $(this).val();
        road_name = road.substring(0, road.length - 1);
        road_type = road.substring(road.length - 1, road.length);

        if (road_type == '路') {
            $("span#road").text(road_name);
            $("div.road_1_circle").show();
            $("div.road_2_circle").hide();
        } else if (road_type == '街') {
            $("span#road").text(road_name);
            $("div.road_1_circle").hide();
            $("div.road_2_circle").show();
        } else {
            $("span#road").text(road);
            $("div.road_1_circle").hide();
            $("div.road_2_circle").hide();
        }
    })
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
