---
layout: page
title: Source
permalink: /Source/

---

<ul class="github clearfix">

</ul>
<!-- HTML to write -->

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
					'<li style="padding:0px 0px;min-width:283px;min-height:250px;" class="col-sm-6 col-md-6 col-lg-6 list"><a class="geopattern  svg-img" data-pattern-id="'+this['name']+'"href="'+this['html_url']+'"><h3>'+this['name']+'</h3></a><p  class="row  center"><i class="icon-random"></i> '+this['forks_count']+'&nbsp<strong>forks</strong> &nbsp&nbsp<i class=" icon-star-empty"></i>&nbsp'+this['stargazers_count']+'&nbsp<strong>stars</strong>&nbsp&nbsp<i class="icon-list-alt"></i>&nbsp'+this['language']+'</p><div><p class=" center" >'+this['description']+'</p></div><p class="row  center" data-toggle="tooltip"data-original-title="Tooltip on top" data-placement="top"><i class="icon-time"></i>&nbsp'+this['updated_at']+'&nbsp<strong></strong></p></div></li>';
				$('.github').append(Item); 
				$('.geopattern').each(function(){
		            var pattern = GeoPattern.generate($(this).data('pattern-id'));
					$(this).css('background-image', pattern.toDataUrl());
	            });
			});  
		}
	})	
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
})
	
</script>
