let prefix = '';//由于前后端完全分离，开发环境需要加上/api来实现跨域，打包放到生产环境不需要加/api跨域
if (process.env.NODE_ENV === 'development') {
    prefix = '/api';
}else{
    prefix=process.env.baseUrl;
}

const api={
    logout:prefix+'/logout',//退出登录
    getUserInfo:prefix+'/user/getCurrentUser',//获取用户信息
    getUserMenu:prefix+'/user/getUserMenu',//获取用户信息
    getToken:prefix+'/user/getUserToken',//获取登录后的token
    getOfficeTree:prefix+'/user/getOfficeTree',//获取组织机构树形
    getListRole:prefix+'/user/getListRole',//获取角色列表
    getOfficeUserTree:prefix+'/user/getUserList',//获取组织机构人员树形
    
    getSiteTree:prefix+'/website/listTree.do',//获取站点树结构
    getPageSite:prefix+'/website/listPage.do',//分页获取站点树结构
    updateWebsite:prefix+'/website/update.do',//修改站点管理
    deleteWebsite:prefix+'/website/delete.do',//删除站点管理
    addWebsite:prefix+'/website/insert.do',//添加站点
    publishSite:prefix+'/website/publish.do',//发布站点
    unpublishSite:prefix+'/website/cancelPublish.do',//撤销发布站点
    getWebsiteId:prefix+'/tags/getWebsiteId.do',//根据栏目或稿件id获取站点id

    getChannelList:prefix+'/channel/listPage.do',//获取栏目列表
    addChannel:prefix+'/channel/insert.do',//添加栏目
    getChannel:prefix+'/channel/getChannel.do',//查看栏目
    updateChannel:prefix+'/channel/update.do',//更新栏目
    deleteChannel:prefix+'/channel/delete.do',//删除栏目
    copyChannel:prefix+'/channel/copyChannel.do',//复制栏目
    moveChannel:prefix+'/channel/moveChannel.do',//移动栏目
    publishChannel:prefix+'/channel/publish.do',//发布栏目
    unpublishChannel:prefix+'/channel/cancelPublish.do',//撤销发布栏目
    getParentChannels:prefix+'/channel/getParentRelations.do',//根据栏目id查询父级栏目
    
    getTempleteList:prefix+'/template/listPage.do',//获取模板列表
    getTemplete:prefix+'/template/getTemplate.do',//获取模板
    addTemplete:prefix+'/template/insert.do',//添加模板
    updateTemplete:prefix+'/template/update.do',//更新模板
    deleteTemplete:prefix+'/template/delete.do',//删除模板
    publishTemplete:prefix+'/template/publish.do',//发布栏目
    unpublishTemplete:prefix+'/template/cancelPublish.do',//撤销发布栏目

    getManuscriptList:prefix+'/manuscript/listPage.do',//获取稿件分页列表
    getAssignManuscripts:prefix+'/manuscript/list.do',//获取稿件不分页列表，可以设定查询起始位置
    getManuscript:prefix+'/manuscript/getManuscript.do',//获取稿件
    addManuscript:prefix+'/manuscript/insert.do',//添加稿件
    updateManuscript:prefix+'/manuscript/update.do',//更新稿件
    deleteManuscript:prefix+'/manuscript/delete.do',//删除稿件
    copyManuscript:prefix+'/manuscript/copyManuscript.do',//复制稿件
    moveManuscript:prefix+'/manuscript/moveManuscript.do',//移动稿件
    publishManuscript:prefix+'/manuscript/publish.do',//发布稿件
    unpublishManuscript:prefix+'/manuscript/cancelPublish.do',//撤销发布稿件
    setStick:prefix+'/manuscript/setTop.do',//设置稿件置顶
    updateManuscriptSort:prefix+'/manuscript/setManuscriptSort.do',//批量更新稿件排序号

    addRange:prefix+'/Range/insert.do',//添加值域
    updateRange:prefix+'/Range/update.do',//更新值域
    delRange:prefix+'/Range/delete.do',//删除值域
    getRange:prefix+'/Range/getDetails.do',//获取值域详情
    getRangeTree:prefix+'/Range/getRangeTree.do',//获取值域树信息
    getRangeChildren:prefix+'/Range/getPageListChidren.do',//分页获取值域子节点信息
    
    addMetadata:prefix+'/metadata/insert.do',//添加元数据集
    updateMetadata:prefix+'/metadata/update.do',//查询元数据集信息
    getMetadataList:prefix+'/metadata/getMetadata.do',//获取元数据集
    getPageMetadata:prefix+'/metadata/pageList.do',//分页获取元数据集
    getMetadata:prefix+'/metadata/getMetadata.do',//查询元数据集信息
    deleteMetadata:prefix+'/metadata/delete.do',//删除元数据

    getMetadataElements:prefix+'/metadataElement/getMetadataElement.do',//获取元数据集下的元数据
    getPageMetadataElements:prefix+'/metadataElement/pageList.do',//分页获取元数据集下的元数据
    addMetadataElement:prefix+'/metadataElement/insert.do',//插入元数据元素
    getMetadataElement:prefix+'/metadataElement/getMetadataElement.do',//获取单个元数据元素详情
    updateMetadataElement:prefix+'/metadataElement/update.do',//更新元数据元素
    delMetadataElement:prefix+'/metadataElement/delete.do',//删除元数据元素
    getDataTypes:prefix+'/metadataElement/getDataTypes',//获取数据类型

    uploadFile:prefix+'/file/upload',//上传文件接口
    uploadSaveFile:prefix+'/file/uploadWithSave',//上传文件接口
    delFileByUrl:prefix+'/file/deleteFileByUrl',//根据url删除文件接口
    delFileById:prefix+'/file/deleteFileById',//根据id删除文件接口
    downloadFile:prefix+'/file/download',//下载文件接口
    getFileServerUrl:prefix+'/file/fileServerPath',//获取服务器路径

    getOffice:prefix+'/user/getOfficeTree',//获取组织机构

    addNotice:prefix+'/bulletin/insert.do',//添加系统公告接口
    updateNotice:prefix+'/bulletin/update.do',//更新系统公告接口
    getNotice:prefix+'/bulletin/getBulletin.do',//获取系统公告详情接口
    delNotice:prefix+'/bulletin/delete.do',//删除系统公告接口
    getNoticePage:prefix+'/bulletin/listPage.do',//分页查询系统公告接口

    optAudit:prefix+'/log/listPage.do',//操作审计列表接口
    getDicts:prefix+'/dict/getDictByType.do',//获取数据字典接口
		
	getQuestionPage:prefix+'/questionnaire/pageList.do',//分页查询问卷调查接口
	delQuestion:prefix+'/questionnaire/delete.do',//删除问卷调查接口
	updateQuestion:prefix+'/questionnaire/update.do',//修改问卷调查接口
	addQuestion:prefix+'/questionnaire/insert.do',//新增问卷调查接口
	getQuestion:prefix+'/questionnaire/getDetails.do',//获取问卷调查详情接口
	getQuestionResult:prefix+'/questionnaire/showQuestionByQuestionnaireId.do',//通过问卷ID获取 整个问卷的票数情况以及各个选项占比接口
	modifyShowTicket:prefix+'/questionnaire/modifyShowTicket.do',//批量更新显示票数接口
	
	getReplyPage: prefix + '/answer/pageList.do', //分页查询问卷调查回复接口
	addReply: prefix + '/answer/insert.do', //新增问卷调查回复接口
	delReply: prefix + '/answer/delete.do', //删除问卷调查回复接口
	getReply: prefix + '/answer/list.do', //查询问卷调查回复接口
	getReplyDetail: prefix + '/answer/view.do', //查询问卷调查回复接口
	
	addInterview:prefix+'/interview/insert.do',//添加在线访谈
    updateInterview:prefix+'/interview/update.do',//更新在线访谈接口
    getInterview:prefix+'/interview/getInterviewInfo.do',//获取在线访谈
    getInterviewList:prefix+'/interview/getListInterview.do',//获取在线访谈列表
    delInterview:prefix+'/interview/delete.do',//删除在线访谈接口
    getInterviewPage:prefix+'/interview/listPage.do',//分页获取访谈列表
    
    getLoginlogPage:prefix+'/loginLog/pageList.do',//分页查询登录日志接口
	
	getFileListPage:prefix+'/adjunct/listPage.do',//分页查询附件信息接口
	getFileList:prefix+'/adjunct/list.do',//查询附件列表信息
	delFile:prefix+'/adjunct/delete.do',//删除附件信息接口
	auditFile:prefix+'/adjunct/setAuditStatus.do',//审核附件信息接口
	
	getInfoCollect:prefix+'/statistic/infoCollect.do',//获取信息收录
	getMyBusiness:prefix+'/statistic/myBusiness.do',//获取本人业务
	getWebsiteCollect:prefix+'/statistic/websiteCollect.do',//获取站点收录
	getStatisticManuscript:prefix+'/statistic/statisticManuscript.do',//统计查询稿件数量
	
	getMediaPage:prefix+'/video/pageList.do',//分页查询视频信息
	setSort:prefix+'/video/setPriorityOrder.do',//设置优先排序视频信息
	addMedia:prefix+'/video/insert.do',//添加视频信息
	getMedia:prefix+'/video/getDetails.do',//查询视频详细信息
	delMedia:prefix+'/video/delete.do',//删除视频信息
	getMediaRecordPage:prefix+'/video/recordPageList.do',//分页查询视频播放记录
	setAudit:prefix+'/video/setAudit.do',//设置视频审核状态
	setPublic:prefix+'/video/setStatus.do',//设置视频公开状态
	getStatisticPlayTimes:prefix+'/video/statisticPlayTimes.do',//按时间统计视频播放次数
	getStatisticUserPlay:prefix+'/video/statisticUserPlay.do',//用户统计
	updateMedia:prefix+'/video/update.do',//更新视频信息
	
	getListRole:prefix+'/user/getListRole',//获取系统中角色列表
	addMessageTemplate:prefix+'/message/addTemplate.do',//添加留言模板
	updateMessageTemplate:prefix+'/message/updateTemplate.do',//更新留言模板
	delMessageTemplate:prefix+'/message/deleteTemplate.do',//删除留言模板
	getMessageTemplateDetail:prefix+'/message/getTemplateDetails.do',//查询留言模板详情
	getMessageTemplateList:prefix+'/message/getTemplateList.do',//查询留言模板列表
	getMessageTemplatePage:prefix+'/message/getTemplatePage.do',//分页查询留言模板列表
	doMessage:prefix+'/message/deal.do',//留言内容处理
	delMessage:prefix+'/message/deleteContent.do',//删除留言内容
	getMessageDetail:prefix+'/message/getContentDeails.do',//查询留言内容详情
	getMessagePage:prefix+'/message/getContentPage.do',//分页查询留言内容
	getMessagelistNode:prefix+'/message/listNode.do',//查询留言内容的处理流程
	setMessagePublic:prefix+'/message/setContentPublic.do',//设置留言内容公开状态
	setMessageRecommand:prefix+'/message/setContentRecommand.do',//设置留言内容推荐状态
	setMessageTop:prefix+'/message/setContentTop.do',//设置留言内容置顶状态
	saveMessage:prefix+'/message/submitContent.do',//提交留言内容
	// getOfficeUserTree:prefix+'/user/getOfficeUserTree',//获取系统中部门用户树形结构

    getReportData:prefix+'/statistic/statisticManuscript.do',//获取统计数据
    
    cleanRecycleChannel:prefix+'/recycle/cleanChannel.do',//清空回收站内所有栏目
    cleanRecycleManuscript:prefix+'/recycle/cleanManuscript.do',//清空回收站内所有稿件
    cleanRecycleWebsite:prefix+'/recycle/cleanWebsite.do',//清空回收站内所有站点
    deleteRecycleChannel:prefix+'/recycle/deleteChannel.do',//根据栏目Id彻底删除栏目数据（支持批量）
    deleteRecycleManuscript:prefix+'/recycle/deleteManuscript.do',//根据稿件Id彻底删除栏目数据（支持批量）
    deleteRecycleWebsite:prefix+'/recycle/deleteWebsite.do',//根据站点Id彻底删除栏目数据（支持批量）
    getRecycleChannel:prefix+'/recycle/getChannel.do',//查询回收站中栏目列表
    getRecycleManuscripts:prefix+'/recycle/getManuscript.do',//查询回收站中稿件列表
    getRecycleWebsite:prefix+'/recycle/getWebsite.do',//查询回收站中站点列表
    recoverData:prefix+'/recycle/recover.do',//根据Id和类型，还原回收站中的数据
	
}

export default api;


