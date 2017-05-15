/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : zwyz

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-05-15 11:33:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` varchar(50) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'LG ON 果香沐浴露牛油果500g，令肌肤嫩滑细腻。', '32', '../src/img/main/l1.jpg');
INSERT INTO `goods` VALUES ('2', '雅顿水感24小时持久保湿面霜，日复一日的维持肌肤的柔嫩平滑。', '65', '../src/img/main/l2.jpg');
INSERT INTO `goods` VALUES ('3', '赫拉hera气垫BB霜气垫美白遮瑕赠替换芯C21，打造完美裸妆！', '34', '../src/img/main/l3.jpg');
INSERT INTO `goods` VALUES ('4', '所望多娜娴草本洗面奶70ml，舒缓、洁净肌肤。', '232', '../src/img/main/l4.jpg');
INSERT INTO `goods` VALUES ('5', '【智能彩妆】MZING彩妆套装妩媚派对8+3套组,打造派对女王！', '43', '../src/img/main/l5.jpg');
INSERT INTO `goods` VALUES ('6', '丽得姿核心至美维c柔亮呵护面膜，温和补水滋养，令肌肤绽放水嫩光彩', '78', '../src/img/main/l6.jpg');
INSERT INTO `goods` VALUES ('7', '伊特露樱花限量版保湿化妆水,少女般天真浪漫！', '76', '../src/img/main/l7.jpg');
INSERT INTO `goods` VALUES ('8', '伊特露樱花限量版保湿化妆水,少女般天真浪漫！', '87', '../src/img/main/l8.jpg');
INSERT INTO `goods` VALUES ('9', '丽得姿核心至美维c柔亮呵护面膜，温和补水滋养，令肌肤绽放水嫩光彩', '43', '../src/img/main/l8.jpg');
INSERT INTO `goods` VALUES ('10', '科颜氏高保湿面膜125ml（专），肌肤柔滑水润，焕发健康光泽！', '32', '../src/img/main/l10.jpg');
INSERT INTO `goods` VALUES ('11', '森田药妆细致舒缓面膜5片，使肌肤持久保持清爽、水嫩状态！', '78', '../src/img/main/l21.jpg');
INSERT INTO `goods` VALUES ('12', '资生堂美润护手霜组合（丝滑柔爽型+渗透滋养型）。', '90', '../src/img/main/l12.jpg');
INSERT INTO `goods` VALUES ('13', '伊思晶钻美肤再生蜗牛水滋润型，亮白保湿好肤色。', '143', '../src/img/main/l13.jpg');
INSERT INTO `goods` VALUES ('14', '科颜氏莹亮净肤泡沫洁面乳150ml（专），令肤色明亮剔透。', '123', '../src/img/main/l14.jpg');
INSERT INTO `goods` VALUES ('15', 'snp药妆黄金胶原蛋白面膜10/盒，奢侈的享受，不奢侈的价格！', '564', '../src/img/main/l15.jpg');
INSERT INTO `goods` VALUES ('16', '骨胶原滋养紧致护手霜润体露套装，由内至外改善皮肤滋润度。', '231', '../src/img/main/l16.jpg');
INSERT INTO `goods` VALUES ('17', '健美创研惊艳卷翘睫毛膏（纤长型）8g，缔造纤长浓密卷翘！', '312', '../src/img/main/l17.jpg');
INSERT INTO `goods` VALUES ('18', '菲拉格慕仲夏之梦淡香水50ml，唤起被温暖阳光包围所散发的香氛。', '97', '../src/img/main/l18.jpg');
INSERT INTO `goods` VALUES ('19', '薇姿温泉纯净温润洁颜油，令肌肤纯净光采！', '78', '../src/img/main/l19.jpg');
INSERT INTO `goods` VALUES ('20', '美帕温泉B5保湿舒缓喷雾150ml，从根本上提高皮肤水合能力!', '76', '../src/img/main/l20.jpg');
INSERT INTO `goods` VALUES ('21', '所望植物活力发膜，植物护发，为头发提供水分及营养。', '86', '../src/img/main/l21.jpg');
INSERT INTO `goods` VALUES ('22', '润百颜蜂巢玻尿酸润唇膏10ml，唇部更加水润饱满有光泽。', '65', '../src/img/main/l22.jpg');
INSERT INTO `goods` VALUES ('23', '韩束红石榴倍润滋养霜50g，护肤实力派，用肌肤说话！', '75', '../src/img/main/l23.jpg');
INSERT INTO `goods` VALUES ('24', 'sexylook极美肌黑膜法礼盒（23片）打造2015护肤宝典。', '64', '../src/img/main/l24.jpg');
INSERT INTO `goods` VALUES ('25', '德国传统制皂，含柠檬成分，清洁保湿肌肤，同时舒缓肌肤不适。', '89', '../src/img/main/l25.jpg');
INSERT INTO `goods` VALUES ('26', '伊思晶钻美肤再生蜗牛乳液滋润型,缩小毛孔方面有非常神奇的功效。', '89', '../src/img/main/l26.jpg');
INSERT INTO `goods` VALUES ('27', '所望头皮护理植物洗发水，植物护发、天然享受！', '86', '../src/img/main/l27.jpg');
INSERT INTO `goods` VALUES ('28', '所望头皮护理植物洗发水，植物护发、天然享受！', '86', '../src/img/main/l28.jpg');
INSERT INTO `goods` VALUES ('29', 'MG美即牛奶嫩滑润颜面膜25g*5，亮白保湿，提亮肤色！', '92', '../src/img/main/l28.jpg');
INSERT INTO `goods` VALUES ('30', '自然乐园纳益其尔清新绿茶乳液180ml，鲜绿茶萃取天然无刺激！', '134', '../src/img/main/l29.jpg');
INSERT INTO `goods` VALUES ('31', '英国AA网维他命E手工皂+檀香手工皂，强效保湿抗老化！', '323', '../src/img/main/l28.jpg');
INSERT INTO `goods` VALUES ('35', '温碧泉八杯水亲亲水润5件套，肌肤感觉如丝般幼滑。', '86', '../src/img/main/l30.jpg');
INSERT INTO `goods` VALUES ('36', '温碧泉八杯水亲亲水润5件套，肌肤感觉如丝般幼滑。', '234', '../src/img/main/l2.jpg');

-- ----------------------------
-- Table structure for `username`
-- ----------------------------
DROP TABLE IF EXISTS `username`;
CREATE TABLE `username` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(50) NOT NULL,
  `password` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of username
-- ----------------------------
INSERT INTO `username` VALUES ('53', 'hugeng', '8888888');
INSERT INTO `username` VALUES ('54', 'oooooooooo', '777777');
INSERT INTO `username` VALUES ('55', 'yyyyy', '555555');
INSERT INTO `username` VALUES ('56', 'dsfdfsdf', '666666');
INSERT INTO `username` VALUES ('57', 'trytryty', '666666');
INSERT INTO `username` VALUES ('58', 'uuuuuuu', '777777');
INSERT INTO `username` VALUES ('59', 'jjjjjjj', '777777');
INSERT INTO `username` VALUES ('60', 'ä½ çš„æ¯ä¸ªç¬¬ä¸‰æ–¹', '555555');
INSERT INTO `username` VALUES ('61', 'jjjjjjjjjjjj', '8888888');
INSERT INTO `username` VALUES ('62', 'ä½ ä¸çŸ¥é“çš„æ˜¯', '999999');
INSERT INTO `username` VALUES ('63', 'æˆ‘ä¸çŸ¥é“å–ä»€ä¹ˆåå­—', '666666');
INSERT INTO `username` VALUES ('64', 'hgnsgdbn', '111111');
INSERT INTO `username` VALUES ('65', 'ä½ æƒ³æƒ³ä¸å°±å¥½äº†å—', '111111');
INSERT INTO `username` VALUES ('66', 'åŠªåŠ›å°±ä¼šæœ‰å›žæŠ¥çš„', '888888');
INSERT INTO `username` VALUES ('67', 'è€å¤§å°½åŠ›äº†ä½ è¡Œä½ ä¸Šå‘€', '0');
INSERT INTO `username` VALUES ('68', 'ä»Šå¤©æ˜¯ä¸ªç¾Žå¥½çš„ä¸€å¤©', '520530');
INSERT INTO `username` VALUES ('69', 'ä»Šå¤©å‹‡å£«æ‰“é©¬åˆº', '0');
INSERT INTO `username` VALUES ('70', 'å®žæ‰“å®žå¤§å£°é“åå€’æ˜¯åå€’æ˜¯', '111111');
INSERT INTO `username` VALUES ('71', 'çƒ­å¸–çƒ­åŒä»å ‚', '555555');
INSERT INTO `username` VALUES ('72', '你今天在干什么了', '123456');
INSERT INTO `username` VALUES ('73', 'çš„èº«ä»½ä»€ä¹ˆäº†', '555555');
INSERT INTO `username` VALUES ('74', '梵蒂冈梵蒂冈', '222222');
INSERT INTO `username` VALUES ('75', '我再想想今天吃什么', '222222');
INSERT INTO `username` VALUES ('76', '史蒂芬孙地方都是方法都是', '777777');
INSERT INTO `username` VALUES ('77', '士大夫撒得分温热无热无', '111111');
INSERT INTO `username` VALUES ('78', 'trytrytrytryt', '222222');
INSERT INTO `username` VALUES ('79', '热帖热同仁堂', '111111');
INSERT INTO `username` VALUES ('80', 'dsgfdsdsf2343', '666666');
INSERT INTO `username` VALUES ('81', '是你带积分大赛方法', '555555');
