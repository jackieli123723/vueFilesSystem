<template>
    <div class="dialog dialog-web-uploader   dialog-blue h5-uploader" id="web-uploader" style="width: 633px; top: auto; bottom: 0px; left: auto; right: 30px; display: block; visibility: visible; z-index: 42;">
  <div class="dialog-header">
    <h3>
      <span class="dialog-header-title">
        <em class="select-text">正在上传(15/36)</em></span>
    </h3>
    <div class="dialog-control">
      <span class="dialog-icon dialog-close icon icon-close">
        <span class="sicon">×</span></span>
      <span class="dialog-icon dialog-min icon icon-minimize">
        <span class="sicon">-</span></span>
    </div>
  </div>
  <div class="dialog-min-header">
    <div class="header-progress"></div>
    <h3>
      <span class="dialog-header-title">
        <em class="select-text">正在上传(15/36)</em></span>
    </h3>
    <div class="dialog-control">
      <span class="dialog-icon dialog-close icon icon-close">
        <span class="sicon">×</span></span>
      <span class="dialog-icon dialog-back icon icon-maximizing">
        <span class="sicon">□</span></span>
    </div>
    <div class="tips" style="display: block;">
      <div class="resident-caution">
        <span class="caution-title">警告</span>
        <span class="caution-text">严禁利用百度网盘上传、传播暴力恐怖、色情违法及侵犯他人合法权益的违法信息，一经发现将严格按照相关法律法规处理。</span>
        <em class="arrow-outer"></em>
        <em class="arrow-inner"></em>
      </div>
      <a class="g-button" href="javascript:void(0);">
        <span class="g-button-right">立即下载</span></a>
      <div class="text"></div>
      <em class="close">×</em>
    </div>
  </div>
  <div class="dialog-body">
    <div class="uploader-list-wrapper">
      <div class="uploader-list-header">
        <div class="file-name">文件(夹)名</div>
        <div class="file-size">大小</div>
        <div class="file-path">上传目录</div>
        <div class="file-status">状态</div>
        <div class="file-operate">操作</div></div>

      <!-- <div class="tips" style="display: block;">
        <div class="resident-caution">
          <span class="caution-title">警告</span>
          <span class="caution-text">严禁利用百度网盘上传、传播暴力恐怖、色情违法及侵犯他人合法权益的违法信息，一经发现将严格按照相关法律法规处理。</span>
          <em class="arrow-outer"></em>
          <em class="arrow-inner"></em>
        </div>
        <a class="g-button" href="javascript:void(0);">
          <span class="g-button-right">立即下载</span></a>
        <div class="text"></div>
        <em class="close">×</em>
      </div> -->

      <div class="tips has-error" style="display: block;">
        <div class="resident-caution">
          <span class="caution-title" style="width: 4px; text-indent: -9999px;">警告</span>
          <span class="caution-text">严禁利用百度网盘上传、传播暴力恐怖、色情违法及侵犯他人合法权益的违法信息，一经发现将严格按照相关法律法规处理。</span>
          <em class="arrow-outer"></em>
          <em class="arrow-inner"></em>
        </div>
        <a class="g-button" href="javascript:void(0);" style="display: none;">
          <span class="g-button-right">立即下载</span></a>
        <div class="text">有3个文件上传成功</div>
        <em class="close">×</em></div>

      <div class="uploader-list">
        <ul class="container" id="uploaderList">

            <li class="file-list status-waiting">
              <div class="process"></div>
              <div class="info">
                <div class="file-name" title="1523938751785-2004-8992.png">
                  <div class="file-icon fileicon-small-pic"></div>
                  <span class="name-text">11112.png</span></div>
                <div class="file-size">186KB</div>
                <div class="file-path">
                  <a title="新建文件夹(9)" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9(9)%2F">新建文件夹(9)</a></div>
                <div class="file-status">
                  <span class="waiting">排队中…</span>
                  <span class="prepare">准备上传…</span>
                  <span class="uploading">
                    <em class="precent">0%</em>
                    <em class="speed">(0b/s)</em></span>
                  <span class="error">
                    <em></em>
                    <i>服务器错误</i>
                    <b>
                    </b>
                  </span>
                  <span class="caution">
                    <em></em>
                    <i>服务器错误</i>
                    <b>
                    </b>
                  </span>
                  <span class="pause">
                    <em></em>
                    <i>已暂停</i>
                  </span>
                  <span class="cancel">
                    <em></em>
                    <i>已取消</i>
                  </span>
                  <span class="success">
                    <em></em>
                    <i>
                    </i>
                  </span>
                </div>
                <div class="file-operate">
                  <em class="operate-pause"></em>
                  <em class="operate-continue"></em>
                  <em class="operate-retry"></em>
                  <em class="operate-remove"></em>
                  <a class="error-link" href="javascript:void(0);">点我解决</a></div>
              </div>
            </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530525346632.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530525346632.png</span></div>
              <div class="file-size">3KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530525353501.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530525353501.png</span></div>
              <div class="file-size">55KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530525606088.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530525606088.png</span></div>
              <div class="file-size">7KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530525622914.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530525622914.png</span></div>
              <div class="file-size">3KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530525672589.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530525672589.png</span></div>
              <div class="file-size">527KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530525682430.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530525682430.png</span></div>
              <div class="file-size">89KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530525730813.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530525730813.png</span></div>
              <div class="file-size">33KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530525793591.jpeg">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530525793591.jpeg</span></div>
              <div class="file-size">249KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530525837498.jpeg">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530525837498.jpeg</span></div>
              <div class="file-size">37KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530525845151.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530525845151.png</span></div>
              <div class="file-size">32KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530525918978.jpg">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530525918978.jpg</span></div>
              <div class="file-size">15KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530525939375.jpeg">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530525939375.jpeg</span></div>
              <div class="file-size">120KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530526310964.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526310964.png</span></div>
              <div class="file-size">77KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530526531322.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526531322.png</span></div>
              <div class="file-size">33KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-success">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530526535323.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526535323.png</span></div>
              <div class="file-size">23KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-uploading">
            <div class="process" style="width: 100%;"></div>
            <div class="info">
              <div class="file-name" title="single-1530526559226.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526559226.png</span></div>
              <div class="file-size">1.3M</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">100%</em>
                  <em class="speed"></em>
                </span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530526565557.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526565557.png</span></div>
              <div class="file-size">32KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530526593278.jpeg">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526593278.jpeg</span></div>
              <div class="file-size">37KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530526597021.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526597021.png</span></div>
              <div class="file-size">32KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530526619815.jpg">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526619815.jpg</span></div>
              <div class="file-size">49KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530526623587.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526623587.png</span></div>
              <div class="file-size">618KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530526641338.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526641338.png</span></div>
              <div class="file-size">3KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530526657606.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526657606.png</span></div>
              <div class="file-size">78KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530526688956.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526688956.png</span></div>
              <div class="file-size">3KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530526709220.jpg">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526709220.jpg</span></div>
              <div class="file-size">4KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530526727579.jpeg">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526727579.jpeg</span></div>
              <div class="file-size">37KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530526952417.jpeg">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526952417.jpeg</span></div>
              <div class="file-size">37KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530526955175.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526955175.png</span></div>
              <div class="file-size">32KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530526986787.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530526986787.png</span></div>
              <div class="file-size">22KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530527005366.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530527005366.png</span></div>
              <div class="file-size">618KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530527033769.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530527033769.png</span></div>
              <div class="file-size">56KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530527037193.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530527037193.png</span></div>
              <div class="file-size">78KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530527055579.png">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530527055579.png</span></div>
              <div class="file-size">7KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530527062839.jpeg">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530527062839.jpeg</span></div>
              <div class="file-size">52KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530527088681.jpg">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530527088681.jpg</span></div>
              <div class="file-size">66KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
          <li class="file-list status-waiting">
            <div class="process"></div>
            <div class="info">
              <div class="file-name" title="single-1530527091937.jpeg">
                <div class="file-icon fileicon-small-pic"></div>
                <span class="name-text">single-1530527091937.jpeg</span></div>
              <div class="file-size">249KB</div>
              <div class="file-path">
                <a title="360云盘" class="server_path" href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">360云盘</a></div>
              <div class="file-status">
                <span class="waiting">排队中…</span>
                <span class="prepare">准备上传…</span>
                <span class="uploading">
                  <em class="precent">0%</em>
                  <em class="speed">(0b/s)</em></span>
                <span class="error">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="caution">
                  <em></em>
                  <i>服务器错误</i>
                  <b>
                  </b>
                </span>
                <span class="pause">
                  <em></em>
                  <i>已暂停</i>
                </span>
                <span class="cancel">
                  <em></em>
                  <i>已取消</i>
                </span>
                <span class="success">
                  <em></em>
                  <i>
                  </i>
                </span>
              </div>
              <div class="file-operate">
                <em class="operate-pause"></em>
                <em class="operate-continue"></em>
                <em class="operate-retry"></em>
                <em class="operate-remove"></em>
                <a class="error-link" href="javascript:void(0);">点我解决</a></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
