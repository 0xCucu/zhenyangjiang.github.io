---
layout: page
title: Source
permalink: /Source/

---

<ul class="github clearfix">

</ul>
<div class="clearfix"></div>


<script src="/assets/js/geopattern.min.js">
	
</script>	
<script type="text/javascript">
$(document).ready(function(){
	$.ajax({
		'type':'get',
		'dataType':'text',
		'url':'https://api.github.com/users/zhenyangjiang/repos?type=owner',
		success:function(data){
			datas =eval("("+data+")");

			$.each(datas,function(){
					Item =
					'<li class="col-sm-6 col-md-4 col-lg-3 list"><a class="geopattern  svg-img" data-pattern-id='+this['name']+'href="'+this['html_url']+'"><h3>'+this['name']+'</h3></a></li>';
				$('.github').append(Item); 
				$('.geopattern').each(function(){
		            var pattern = GeoPattern.generate($(this).data('pattern-id'));
					$(this).css('background-image', pattern.toDataUrl());
	            });
			});  
		}
	})	
})
	
</script>
