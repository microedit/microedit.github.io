/* 李增兴版权所有.
   lizx all right reserve.
   允许任何用户查看.
*/
function diagnose(this1) {
	var therapy = document.getElementById("therapy")
	therapy.innerHTML = ''
	var cold = this1.form.cold.value //寒热感
	var wind = this1.form.wind.value //风
	var hot = this1.form.hot.value   //体温
	var nose  = this1.form.nose.value //鼻
	var snot = this1.form.snot.value //鼻涕
	var taste = this1.form.taste.value //口感
	var furredTongue  = this1.form.furredTongue.value //舌苔
	var tongue = this1.form.tongue.value //舌质
	var sputum = this1.form.sputum.value //
	var head = this1.form.head.value
	var lung  = this1.form.lung.value
	var cough = this1.form.cough.value
	var ache  = this1.form.ache.value
	var belly  = this1.form.belly.value
	var throat  = this1.form.throat.value
	var sputum = this1.form.sputum.value
	var pulseSpeed = this1.form.pulseSpeed.value
	var piss = this1.form.piss.value
	// 参考药店常见病联合用药手册
	if (snot=="流清涕" && (throat=='咽喉红痛' || throat=='咽喉干痛' )) {
		therapy.innerHTML += "<h4>请检查输入: 通常 流清涕 和 咽喉红痛/干痛 不会同时出现, 请检查是否输入有误</h4>";
	}
	if (snot=="流清涕" && furredTongue=="舌苔薄黄" ) {
		therapy.innerHTML += "<h4>请检查输入: 通常 流清涕 和 舌苔薄黄 不会同时出现, 请检查是否输入有误</h4>";
	}
	if (snot=="流清涕" && furredTongue=="舌苔厚黄" ) {
		therapy.innerHTML += "<h4>请检查输入: 通常 流清涕 和 舌苔厚黄 不会同时出现, 请检查是否输入有误</h4>";
	}
	if (snot=="流清涕" && sputum=="痰稀黄色" ) {
		therapy.innerHTML += "<h4>请检查输入: 通常 流清涕 和 痰稀黄色 不会同时出现, 请检查是否输入有误</h4>";
	}
	if (snot=="流清涕" && sputum=="痰浓黄色" ) {
		therapy.innerHTML += "<h4>请检查输入: 通常 流清涕 和 痰浓黄色 不会同时出现, 请检查是否输入有误</h4>";
	}
	if (snot=="流黄涕" && sputum=="痰稀白色" ) {
		therapy.innerHTML += "<h4>请检查输入: 通常 流黄涕 和 痰稀白色 不会同时出现, 请检查是否输入有误</h4>";
	}
	if (snot=="流黄涕" && throat=="咽喉痒" ) {
		therapy.innerHTML += "<h4>请检查输入: 通常 流黄涕 和 咽喉痒 不会同时出现, 请检查是否输入有误</h4>";
	}
	if (cough=="干咳无痰" && sputum=="痰稀白色" ) {
		therapy.innerHTML += "<h4>请检查输入: 通常 干咳无痰 和 痰稀白色 不会同时出现, 请检查是否输入有误</h4>";
	}
	if ( therapy.innerHTML != '' )
	{
		therapy.innerHTML += "<br>输入内容有矛盾, 请检查和修正输入重试";
		return false
	}

	if ((cold=="恶寒" || cold=="畏寒") && (snot=="流清涕" || sputum=="痰稀白色") 
	 && sputum != "痰黄" && piss!="尿黄" ) {
		therapy.innerHTML += "<h3>诊断建议:风寒感冒</h3>\
		<br>必有症状:恶寒/畏寒,流清涕或痰稀白色 \
		<br>或有症状: 怕风, 头痛, 四肢酸痛, 脉浮紧 \
		<br>没有症状: 痰黄, 尿黄 \
		<br>治法:辛温解表,宣肺散寒	\
		<br>方药:风寒感冒冲剂, 荆防败毒散, 荆防颗粒, 选吃1种\
		<br>忌: 忌寒凉食物, 包括冷冻食品, 菊花\金银花等凉性食物药物等 \
		<br>生活饮食：注意保温避寒, 喝姜糖水、姜粥等，可用热水泡脚，需要出汗, 多发汗, 可以喝热水后盖2层被子发汗。";
	}
	if ( throat=='咽喉红痛' || snot=="流黄涕" || (cough=="咳嗽有痰" && sputum=="痰稀黄色") ) {
		therapy.innerHTML += "<h3>诊断建议:风热感冒</h3>\
		<br>基本症状:咽喉红痛, (流黄涕或咳嗽痰黄)\
		<br>或有症状: 发热, 微恶寒, 口渴, 微咳, 脉浮数 \
		<br>没有症状: 痰白, 尿清 \
		<br>治法:辛凉解表,清热解毒	\
		<br>方药:风热感冒冲剂, 银翘散, 选吃1种\
		<br>其他:柴黄片，羚羊感冒片，银翘片.感冒咳嗽颗粒.板蓝根颗粒,桑菊感冒片.精制银翘解毒片.感冒止咳胶囊、双黄连胶囊等 \
		<br>生活饮食：多饮水，饮食易清淡。";
	}
	if ( cold =="正常" && snot=="流清涕" ) {
		therapy.innerHTML += "<h3>诊断建议:风寒性鼻炎</h3>\
		<br>必有症状: 流清涕 \
		<br>或有症状: 怕风, \
		<br>没有症状: 流黄涕, 痰黄, 尿黄 \
		<br>治法:辛温解表,宣肺散寒	\
		<br>方药:风寒感冒冲剂, 荆防败毒散, 荆防颗粒, 选吃1种\
		<br>忌: 忌寒凉食物, 包括冷冻食品, 菊花\金银花等凉性食物药物等 \
		<br>生活饮食：注意保温避寒, 喝姜糖水、姜粥等，可用热水泡脚，需要出汗, 多发汗, 可以喝热水后盖2层被子发汗。";
	}
	if ( cold =="正常" && snot=="流黄涕" ) {
		therapy.innerHTML += "<h3>诊断建议:慢性鼻炎</h3>\
		<br>必有症状: 流浓涕, 黄色或青色 \
		<br>或有症状: 怕风, \
		<br>没有症状: 流清涕 \
		<br>治法:辛凉解表, 	\
		<br>方药:风热感冒冲剂, 荆防败毒散, 荆防颗粒, 选吃1种\
		<br>忌: 忌寒凉食物, 包括冷冻食品, 菊花\金银花等凉性食物药物等 \
		<br>生活饮食：饮食易清淡, 多喝水, 化解浓涕, 排尿排毒。";
	}
	
	if ( lung=="气管有痰音" ){
		therapy.innerHTML += "<h3>诊断建议:气管炎</h3>\
		<br>必有症状: \
		<br>或有症状: \
		<br>没有症状: \
		<br>用药原则：\
		<br>一般用药：\
		<br>寒热症状参考风寒感冒/风热感冒"
	}
	if ( lung=="支气管有痰音" ){
		therapy.innerHTML += "<h3>诊断建议:支气管炎</h3>\
		<br>必有症状: \
		<br>或有症状: \
		<br>没有症状: \
		<br>用药原则：\
		<br>一般用药：\
		<br>寒热症状参考风寒感冒/风热感冒"
	}
	if ( lung=="肺部有痰音" ){
		therapy.innerHTML += "<h3>诊断建议:肺炎</h3>\
		寒热症状参考风寒感冒/风热感冒"
	}
	if (belly=="腹痛,腹泻,恶心,呕吐" ){
		therapy.innerHTML += "<h3>诊断建议:食物中毒</h3>\
		因食用了有毒食物, 如饭菜\水果\零食等食物中含有农药/病菌/变质/有毒物/污染等原因, 引起胃肠防御反应，呕吐，腹痛，腹泻，恶心，发热, 头晕等症状。\
		<br>没有症状:  \
		用药原则：抗炎药 抗病毒 止泻药 \
		一般用药：藿香正气液(理气), 行军散(止痛) \
		联合用药：\
		建议顾客：充分呕吐/排泄, 尽量排毒干净, 呕吐/排泄干净后, 喝生理盐水,补充水分,盐分。"
		therapy.innerHTML += "<h3>诊断建议:胃肠感冒</h3>\
		因为身体卫气虚, 腹部/口部受寒或冷风吹, 引起胃肠道紊乱，伴有腹痛，腹泻，恶心，呕吐，发热。\
		用药原则：抗炎药 抗病毒 止泻药 \
		一般用药：藿香正气液或胶囊，四季感冒片，健胃消食药 \
		联合用药：藿香正气液 盐酸吗啉胍片 氟哌酸胶囊（儿童禁用）\
		建议顾客：可以服用绿豆水、西瓜汁预防中暑，如发生中暑，马上到阴凉处，及时服用解暑药。"
	}
	if (lung=="肺部有痰音,支气管有痰音,咳嗽有痰" ){
		therapy.innerHTML += "<h3>诊断建议:急性支气管炎</h3>\
		<br>常识判断：临床以咳嗽伴(或不伴)有支气管分泌物增多,肺部有痰音, 支气管有痰音, 咳嗽有痰为特征。\
		<br>用药原则：祛痰止咳类 抗生素\
		<br>没有症状:  \
		<br>联合用药：\
		<br>⑴咳宁胶囊 青霉素 V 钾\
		<br>⑵板兰根冲剂 复方甘草片 头孢克肟\
		<br>①发热时可服用对乙酰胺基酚片\
		<br>②咳嗽频繁且无痰时，可服咳必清\
		<br>③痰粘稠不易咯出时，可口服必嗽平\
		<br>④伴哮喘时可口服氨茶碱芩暴红止咳片,氢溴酸右美沙芬口服液,,盐酸氨溴索口服液,强力枇杷露,头孢拉定,阿莫西林,琥乙红霉素,阿奇霉素等。\
		<br>建议顾客：多喝水，吃清淡、易消化食物，体弱者可口服多种维生素，维生素 B2 \
		增强支气管粘膜抵抗力．平时积极锻炼身体，预防感冒，注意保暖，少抽烟，少饮酒。";
	}
	if ( therapy.innerHTML == '' )
	{
		therapy.innerHTML += "治法不明";
	}
}

function disease(illness) {
		var cure = {
	//病症	具有的症状	没有的症状	治法	方药	针灸	按摩	艾灸
	"风寒感冒":	"症状:恶寒,怕风,流清涕,咳嗽痰稀<br>诊断:风寒感冒<br>治法:辛温解表,宣肺散寒	<br>方药:风寒感冒冲剂, 荆防败毒散",
	"风热感冒":	"症状:发热,流黄涕,口渴,咽喉红痛,咳黄痰,	,恶寒,流清涕. 治法:辛温解表,宣肺散寒	方药:风寒感冒冲剂, 荆防败毒散"
	}
}
	
