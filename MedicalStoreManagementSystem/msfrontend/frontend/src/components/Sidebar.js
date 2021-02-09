import React from "react";
import usericon from "adminbsb-materialdesign/images/user.png";
import Config from "../utils/Config";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  

  render() {
    return (
      <section>
        
        <aside id="leftsidebar" class="sidebar">
            
            <div class="user-info">
                <div class="image">
                    <img src="images/user.png" width="48" height="48" alt="User"/>
                </div>
                <div class="info-container">
                    <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                    <div class="email">john.doe@example.com</div>
                    <div class="btn-group user-helper-dropdown">
                        <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                        <ul class="dropdown-menu pull-right">
                            <li><a href="javascript:void(0);" class=" waves-effect waves-block"><i class="material-icons">person</i>Profile</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="javascript:void(0);" class=" waves-effect waves-block"><i class="material-icons">group</i>Followers</a></li>
                            <li><a href="javascript:void(0);" class=" waves-effect waves-block"><i class="material-icons">shopping_cart</i>Sales</a></li>
                            <li><a href="javascript:void(0);" class=" waves-effect waves-block"><i class="material-icons">favorite</i>Likes</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="javascript:void(0);" class=" waves-effect waves-block"><i class="material-icons">input</i>Sign Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            
            <div class="menu">
                <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 35px;"><ul class="list" style="overflow: hidden; width: auto; height: 35px;">
                    <li class="header">MAIN NAVIGATION</li>
                    <li class="active">
                        <a href="index.html" class="toggled waves-effect waves-block">
                            <i class="material-icons">home</i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages/typography.html" class=" waves-effect waves-block">
                            <i class="material-icons">text_fields</i>
                            <span>Typography</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages/helper-classes.html" class=" waves-effect waves-block">
                            <i class="material-icons">layers</i>
                            <span>Helper Classes</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="menu-toggle waves-effect waves-block">
                            <i class="material-icons">widgets</i>
                            <span>Widgets</span>
                        </a>
                        <ul class="ml-menu">
                            <li>
                                <a href="javascript:void(0);" class="menu-toggle waves-effect waves-block">
                                    <span>Cards</span>
                                </a>
                                <ul class="ml-menu">
                                    <li>
                                        <a href="pages/widgets/cards/basic.html" class=" waves-effect waves-block">Basic</a>
                                    </li>
                                    <li>
                                        <a href="pages/widgets/cards/colored.html" class=" waves-effect waves-block">Colored</a>
                                    </li>
                                    <li>
                                        <a href="pages/widgets/cards/no-header.html" class=" waves-effect waves-block">No Header</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="menu-toggle waves-effect waves-block">
                                    <span>Infobox</span>
                                </a>
                                <ul class="ml-menu">
                                    <li>
                                        <a href="pages/widgets/infobox/infobox-1.html" class=" waves-effect waves-block">Infobox-1</a>
                                    </li>
                                    <li>
                                        <a href="pages/widgets/infobox/infobox-2.html" class=" waves-effect waves-block">Infobox-2</a>
                                    </li>
                                    <li>
                                        <a href="pages/widgets/infobox/infobox-3.html" class=" waves-effect waves-block">Infobox-3</a>
                                    </li>
                                    <li>
                                        <a href="pages/widgets/infobox/infobox-4.html" class=" waves-effect waves-block">Infobox-4</a>
                                    </li>
                                    <li>
                                        <a href="pages/widgets/infobox/infobox-5.html" class=" waves-effect waves-block">Infobox-5</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="menu-toggle waves-effect waves-block">
                            <i class="material-icons">swap_calls</i>
                            <span>User Interface (UI)</span>
                        </a>
                        <ul class="ml-menu">
                            <li>
                                <a href="pages/ui/alerts.html" class=" waves-effect waves-block">Alerts</a>
                            </li>
                            <li>
                                <a href="pages/ui/animations.html" class=" waves-effect waves-block">Animations</a>
                            </li>
                            <li>
                                <a href="pages/ui/badges.html" class=" waves-effect waves-block">Badges</a>
                            </li>

                            <li>
                                <a href="pages/ui/breadcrumbs.html" class=" waves-effect waves-block">Breadcrumbs</a>
                            </li>
                            <li>
                                <a href="pages/ui/buttons.html" class=" waves-effect waves-block">Buttons</a>
                            </li>
                            <li>
                                <a href="pages/ui/collapse.html" class=" waves-effect waves-block">Collapse</a>
                            </li>
                            <li>
                                <a href="pages/ui/colors.html" class=" waves-effect waves-block">Colors</a>
                            </li>
                            <li>
                                <a href="pages/ui/dialogs.html" class=" waves-effect waves-block">Dialogs</a>
                            </li>
                            <li>
                                <a href="pages/ui/icons.html" class=" waves-effect waves-block">Icons</a>
                            </li>
                            <li>
                                <a href="pages/ui/labels.html" class=" waves-effect waves-block">Labels</a>
                            </li>
                            <li>
                                <a href="pages/ui/list-group.html" class=" waves-effect waves-block">List Group</a>
                            </li>
                            <li>
                                <a href="pages/ui/media-object.html" class=" waves-effect waves-block">Media Object</a>
                            </li>
                            <li>
                                <a href="pages/ui/modals.html" class=" waves-effect waves-block">Modals</a>
                            </li>
                            <li>
                                <a href="pages/ui/notifications.html" class=" waves-effect waves-block">Notifications</a>
                            </li>
                            <li>
                                <a href="pages/ui/pagination.html" class=" waves-effect waves-block">Pagination</a>
                            </li>
                            <li>
                                <a href="pages/ui/preloaders.html" class=" waves-effect waves-block">Preloaders</a>
                            </li>
                            <li>
                                <a href="pages/ui/progressbars.html" class=" waves-effect waves-block">Progress Bars</a>
                            </li>
                            <li>
                                <a href="pages/ui/range-sliders.html" class=" waves-effect waves-block">Range Sliders</a>
                            </li>
                            <li>
                                <a href="pages/ui/sortable-nestable.html" class=" waves-effect waves-block">Sortable &amp; Nestable</a>
                            </li>
                            <li>
                                <a href="pages/ui/tabs.html" class=" waves-effect waves-block">Tabs</a>
                            </li>
                            <li>
                                <a href="pages/ui/thumbnails.html" class=" waves-effect waves-block">Thumbnails</a>
                            </li>
                            <li>
                                <a href="pages/ui/tooltips-popovers.html" class=" waves-effect waves-block">Tooltips &amp; Popovers</a>
                            </li>
                            <li>
                                <a href="pages/ui/waves.html" class=" waves-effect waves-block">Waves</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="menu-toggle waves-effect waves-block">
                            <i class="material-icons">assignment</i>
                            <span>Forms</span>
                        </a>
                        <ul class="ml-menu">
                            <li>
                                <a href="pages/forms/basic-form-elements.html" class=" waves-effect waves-block">Basic Form Elements</a>
                            </li>
                            <li>
                                <a href="pages/forms/advanced-form-elements.html" class=" waves-effect waves-block">Advanced Form Elements</a>
                            </li>
                            <li>
                                <a href="pages/forms/form-examples.html" class=" waves-effect waves-block">Form Examples</a>
                            </li>
                            <li>
                                <a href="pages/forms/form-validation.html" class=" waves-effect waves-block">Form Validation</a>
                            </li>
                            <li>
                                <a href="pages/forms/form-wizard.html" class=" waves-effect waves-block">Form Wizard</a>
                            </li>
                            <li>
                                <a href="pages/forms/editors.html" class=" waves-effect waves-block">Editors</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="menu-toggle waves-effect waves-block">
                            <i class="material-icons">view_list</i>
                            <span>Tables</span>
                        </a>
                        <ul class="ml-menu">
                            <li>
                                <a href="pages/tables/normal-tables.html" class=" waves-effect waves-block">Normal Tables</a>
                            </li>
                            <li>
                                <a href="pages/tables/jquery-datatable.html" class=" waves-effect waves-block">Jquery Datatables</a>
                            </li>
                            <li>
                                <a href="pages/tables/editable-table.html" class=" waves-effect waves-block">Editable Tables</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="menu-toggle waves-effect waves-block">
                            <i class="material-icons">perm_media</i>
                            <span>Medias</span>
                        </a>
                        <ul class="ml-menu">
                            <li>
                                <a href="pages/medias/image-gallery.html" class=" waves-effect waves-block">Image Gallery</a>
                            </li>
                            <li>
                                <a href="pages/medias/carousel.html" class=" waves-effect waves-block">Carousel</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="menu-toggle waves-effect waves-block">
                            <i class="material-icons">pie_chart</i>
                            <span>Charts</span>
                        </a>
                        <ul class="ml-menu">
                            <li>
                                <a href="pages/charts/morris.html" class=" waves-effect waves-block">Morris</a>
                            </li>
                            <li>
                                <a href="pages/charts/flot.html" class=" waves-effect waves-block">Flot</a>
                            </li>
                            <li>
                                <a href="pages/charts/chartjs.html" class=" waves-effect waves-block">ChartJS</a>
                            </li>
                            <li>
                                <a href="pages/charts/sparkline.html" class=" waves-effect waves-block">Sparkline</a>
                            </li>
                            <li>
                                <a href="pages/charts/jquery-knob.html" class=" waves-effect waves-block">Jquery Knob</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="menu-toggle waves-effect waves-block">
                            <i class="material-icons">content_copy</i>
                            <span>Example Pages</span>
                        </a>
                        <ul class="ml-menu">
                            <li>
                                <a href="pages/examples/profile.html" class=" waves-effect waves-block">Profile</a>
                            </li>
                            <li>
                                <a href="pages/examples/sign-in.html" class=" waves-effect waves-block">Sign In</a>
                            </li>
                            <li>
                                <a href="pages/examples/sign-up.html" class=" waves-effect waves-block">Sign Up</a>
                            </li>
                            <li>
                                <a href="pages/examples/forgot-password.html" class=" waves-effect waves-block">Forgot Password</a>
                            </li>
                            <li>
                                <a href="pages/examples/blank.html" class=" waves-effect waves-block">Blank Page</a>
                            </li>
                            <li>
                                <a href="pages/examples/404.html" class=" waves-effect waves-block">404 - Not Found</a>
                            </li>
                            <li>
                                <a href="pages/examples/500.html" class=" waves-effect waves-block">500 - Server Error</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="menu-toggle waves-effect waves-block">
                            <i class="material-icons">map</i>
                            <span>Maps</span>
                        </a>
                        <ul class="ml-menu">
                            <li>
                                <a href="pages/maps/google.html" class=" waves-effect waves-block">Google Map</a>
                            </li>
                            <li>
                                <a href="pages/maps/yandex.html" class=" waves-effect waves-block">YandexMap</a>
                            </li>
                            <li>
                                <a href="pages/maps/jvectormap.html" class=" waves-effect waves-block">jVectorMap</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="menu-toggle waves-effect waves-block">
                            <i class="material-icons">trending_down</i>
                            <span>Multi Level Menu</span>
                        </a>
                        <ul class="ml-menu">
                            <li>
                                <a href="javascript:void(0);" class=" waves-effect waves-block">
                                    <span>Menu Item</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class=" waves-effect waves-block">
                                    <span>Menu Item - 2</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="menu-toggle waves-effect waves-block">
                                    <span>Level - 2</span>
                                </a>
                                <ul class="ml-menu">
                                    <li>
                                        <a href="javascript:void(0);" class=" waves-effect waves-block">
                                            <span>Menu Item</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="menu-toggle waves-effect waves-block">
                                            <span>Level - 3</span>
                                        </a>
                                        <ul class="ml-menu">
                                            <li>
                                                <a href="javascript:void(0);" class=" waves-effect waves-block">
                                                    <span>Level - 4</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="pages/changelogs.html" class=" waves-effect waves-block">
                            <i class="material-icons">update</i>
                            <span>Changelogs</span>
                        </a>
                    </li>
                    <li class="header">LABELS</li>
                    <li>
                        <a href="javascript:void(0);" class=" waves-effect waves-block">
                            <i class="material-icons col-red">donut_large</i>
                            <span>Important</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class=" waves-effect waves-block">
                            <i class="material-icons col-amber">donut_large</i>
                            <span>Warning</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class=" waves-effect waves-block">
                            <i class="material-icons col-light-blue">donut_large</i>
                            <span>Information</span>
                        </a>
                    </li>
                </ul><div class="slimScrollBar" style="background: rgba(0, 0, 0, 0.5); width: 4px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 0px; z-index: 99; right: 1px; height: 30px;"></div><div class="slimScrollRail" style="width: 4px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 0px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
            </div>
            
            
            <div class="legal">
                <div class="copyright">
                    © 2016 - 2017 <a href="javascript:void(0);">AdminBSB - Material Design</a>.
                </div>
                <div class="version">
                    <b>Version: </b> 1.0.5
                </div>
            </div>
            
        </aside>
        
        
        <aside id="rightsidebar" class="right-sidebar">
            <ul class="nav nav-tabs tab-nav-right" role="tablist">
                <li role="presentation" class="active"><a href="#skins" data-toggle="tab">SKINS</a></li>
                <li role="presentation"><a href="#settings" data-toggle="tab">SETTINGS</a></li>
            </ul>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade in active in active" id="skins">
                    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 204px;"><ul class="demo-choose-skin" style="overflow: hidden; width: auto; height: 204px;">
                        <li data-theme="red" class="active">
                            <div class="red"></div>
                            <span>Red</span>
                        </li>
                        <li data-theme="pink">
                            <div class="pink"></div>
                            <span>Pink</span>
                        </li>
                        <li data-theme="purple">
                            <div class="purple"></div>
                            <span>Purple</span>
                        </li>
                        <li data-theme="deep-purple">
                            <div class="deep-purple"></div>
                            <span>Deep Purple</span>
                        </li>
                        <li data-theme="indigo">
                            <div class="indigo"></div>
                            <span>Indigo</span>
                        </li>
                        <li data-theme="blue">
                            <div class="blue"></div>
                            <span>Blue</span>
                        </li>
                        <li data-theme="light-blue">
                            <div class="light-blue"></div>
                            <span>Light Blue</span>
                        </li>
                        <li data-theme="cyan">
                            <div class="cyan"></div>
                            <span>Cyan</span>
                        </li>
                        <li data-theme="teal">
                            <div class="teal"></div>
                            <span>Teal</span>
                        </li>
                        <li data-theme="green">
                            <div class="green"></div>
                            <span>Green</span>
                        </li>
                        <li data-theme="light-green">
                            <div class="light-green"></div>
                            <span>Light Green</span>
                        </li>
                        <li data-theme="lime">
                            <div class="lime"></div>
                            <span>Lime</span>
                        </li>
                        <li data-theme="yellow">
                            <div class="yellow"></div>
                            <span>Yellow</span>
                        </li>
                        <li data-theme="amber">
                            <div class="amber"></div>
                            <span>Amber</span>
                        </li>
                        <li data-theme="orange">
                            <div class="orange"></div>
                            <span>Orange</span>
                        </li>
                        <li data-theme="deep-orange">
                            <div class="deep-orange"></div>
                            <span>Deep Orange</span>
                        </li>
                        <li data-theme="brown">
                            <div class="brown"></div>
                            <span>Brown</span>
                        </li>
                        <li data-theme="grey">
                            <div class="grey"></div>
                            <span>Grey</span>
                        </li>
                        <li data-theme="blue-grey">
                            <div class="blue-grey"></div>
                            <span>Blue Grey</span>
                        </li>
                        <li data-theme="black">
                            <div class="black"></div>
                            <span>Black</span>
                        </li>
                    </ul><div class="slimScrollBar" style="background: rgba(0, 0, 0, 0.5); width: 6px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 0px; z-index: 99; right: 1px; height: 47.5068px;"></div><div class="slimScrollRail" style="width: 6px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 0px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="settings">
                    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 204px;"><div class="demo-settings" style="overflow: hidden; width: auto; height: 204px;">
                        <p>GENERAL SETTINGS</p>
                        <ul class="setting-list">
                            <li>
                                <span>Report Panel Usage</span>
                                <div class="switch">
                                    <label><input type="checkbox" checked=""><span class="lever"></span></label>
                                </div>
                            </li>
                            <li>
                                <span>Email Redirect</span>
                                <div class="switch">
                                    <label><input type="checkbox"><span class="lever"></span></label>
                                </div>
                            </li>
                        </ul>
                        <p>SYSTEM SETTINGS</p>
                        <ul class="setting-list">
                            <li>
                                <span>Notifications</span>
                                <div class="switch">
                                    <label><input type="checkbox" checked=""><span class="lever"></span></label>
                                </div>
                            </li>
                            <li>
                                <span>Auto Updates</span>
                                <div class="switch">
                                    <label><input type="checkbox" checked=""><span class="lever"></span></label>
                                </div>
                            </li>
                        </ul>
                        <p>ACCOUNT SETTINGS</p>
                        <ul class="setting-list">
                            <li>
                                <span>Offline</span>
                                <div class="switch">
                                    <label><input type="checkbox"><span class="lever"></span></label>
                                </div>
                            </li>
                            <li>
                                <span>Location Permission</span>
                                <div class="switch">
                                    <label><input type="checkbox" checked=""><span class="lever"></span></label>
                                </div>
                            </li>
                        </ul>
                    </div><div class="slimScrollBar" style="background: rgba(0, 0, 0, 0.5); width: 6px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 0px; z-index: 99; right: 1px;"></div><div class="slimScrollRail" style="width: 6px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 0px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
                </div>
            </div>
        </aside>
      
    </section>
      
    );
  }
}

export default Sidebar;