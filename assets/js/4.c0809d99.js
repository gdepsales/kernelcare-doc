(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{204:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p"),e._m(1),a("p"),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("The Linux kernel is the most important piece of the software on your server, as a security flaw in it can expose all of your services and customers' data. KernelCare is a technology that allows you to keep the Linux kernel safe at all times, automatically, without ever having to stop the server and rebooting it causing downtime and inconvenient scheduling of maintenance windows. This improves availability, security, stability, operation costs, and customer satisfaction. It works with almost all mainstream distributions of Linux. It is simple, fast, and very easy to deploy while being able to handle very complex patches and customized kernels if you need them.")]),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("KernelCare can be installed on any x86_64 compatible server or VM running one of the following distribution:")]),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("The exact list of compatible kernels can be found on the following link: "),a("a",{attrs:{href:"https://patches.kernelcare.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://patches.kernelcare.com/"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Standard OS kernels are required in most cases unless the custom kernel is supported.")]),e._v(" "),a("p",[e._v("The software can be installed on the running server and doesn't require a reboot.")]),e._v(" "),a("p",[e._v("Basic Linux skills are sufficient to deploy KernelCare on AWS. Simple deployments involve just an EC2 instance. KernelCare is available as BYOL model. You need to register in our "),a("a",{attrs:{href:"https://cln.cloudlinux.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("customer portal"),a("OutboundLink")],1),e._v(" to get the trial license. Once you get the trial license, you need to register your running EC2 instance with the activation key.")]),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("As long as your servers have access to the Internet, even behind NAT – you will be able to use KernelCare patch server without any problems.")]),e._v(" "),a("p",[e._v("Generally, KernelCare requires HTTPS connection to two servers for the proper work:")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),a("p",[e._v("If your servers don't have direct Internet access but can gain access to the Internet using proxy, the configuration is not that different. KernelCare can pick up standard environment variables for proxy.")]),e._v(" "),e._m(9),e._v(" "),a("p",[e._v("Make sure you have environment settings for proxy setup, and everything else will be the same as if the servers were directly connected to the Internet:")]),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),a("p",[e._v("The only thing you need to be able to install/control you KernelCare deployment is SSH access (root credentials, key-based authentication/sudo or similar mechanisms are preferred).")]),e._v(" "),e._m(13),e._v(" "),a("p",[e._v("KernelCare is billed as a subscription service – you can find more details in the table below.")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),a("p",[e._v("KernelCare agent has a tiny RAM footprint – binary patches usually require less than 1 MB.")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),a("p",[e._v("To install KernelCare, run:")]),e._v(" "),e._m(18),a("p",[e._v("or:")]),e._v(" "),e._m(19),a("p",[e._v("If you are using IP-based license, nothing else required to be done.\nIf you are using key-based license, run:")]),e._v(" "),e._m(20),e._m(21),e._v(" "),a("p",[e._v("You can easily automate KernelCare deployment with Ansible, Puppet, Chef or other automation tools.\nHere are the steps that may be automated:")]),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),a("p",[e._v("Systems protected by KernelCare can be monitored by means of CloudLinux Network (CLN) portal available at "),a("a",{attrs:{href:"https://cln.cloudlinux.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cln.cloudlinux.com"),a("OutboundLink")],1),e._v(". Registered KernelCare installations are grouped by license keys. Kernels that are marked with exclamation sign in "),a("span",{staticStyle:{color:"#E76930"}},[e._v("amber")]),e._v(" do not have the latest patches installed.")]),e._v(" "),e._m(25),e._v(" "),a("p",[e._v("In either case, you can check whether the latest available patch has been applied by running the following command on a system protected by KernelCare:")]),e._v(" "),e._m(26),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),a("p",[e._v("KernelCare is packaged in RPM/DEB packages (depending on Linux distribution) and will update any time system packages are updated. No additional maintenance is needed.")]),e._v(" "),e._m(30),e._v(" "),a("p",[e._v("If one of your instances degraded, once you start another instance based on EBS or snapshot – KernelCare will continue working as before, no additional work is needed.\nIf you set up a new server instead, re-register KernelCare on the new server.\nIf you decide to uninstall patches, run command:")]),e._v(" "),e._m(31),e._m(32),e._v(" "),e._m(33),e._v(" "),a("p",[e._v("or")]),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),a("p",[e._v("KernelCare Patch Server has several patch feeds available in addition to the standard (production) feed:")]),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),a("p",[e._v("The best way to handle QA and Production environments is to use Sticky tag feature of KernelCare license keys issued from CloudLinux Network (CLN) portal.\nTo use this tag, go to CLN portal → KernelCare tab → click on the target key → Edit Key Info window.")]),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),a("p",[e._v("You should provide a separate key for each environment and set them to a particular sticky tag which is actually the date to which all the servers in an environment have to be patched.")]),e._v(" "),e._m(42),e._v(" "),a("p",[e._v("The date in Sticky tag field can be any date from May 28, 2018 up to one day before today.")]),e._v(" "),a("p",[e._v("To use Sticky tag feature on the servers to be patched, run:")]),e._v(" "),e._m(43),e._m(44),e._v(" "),e._m(45),e._v(" "),a("p",[e._v("When the Sticky tag feature is enabled for particular servers, all such servers will get patches only released before the date specified in the Sticky tag field.")]),e._v(" "),a("p",[e._v("This way, you can add new patches to all the servers in some environment (i.e. registered with the same KernelCare license key) by updating only a single field in the CLN portal.")]),e._v(" "),e._m(46),e._v(" "),a("p",[e._v("We offer unlimited, 24x7x365 support. "),a("a",{attrs:{href:"https://cloudlinux.zendesk.com/hc/requests/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("Submit a request"),a("OutboundLink")],1),e._v(" or email us at "),a("a",{attrs:{href:"mailto:support@cloudlinux.com"}},[e._v("support@cloudlinux.com")]),e._v(".")]),e._v(" "),e._m(47),e._v(" "),e._m(48),a("p",[e._v("Then paste the generated key into the support request.")]),e._v(" "),e._m(49),e._v(" "),a("p",[e._v("Your KernelCare subscription includes free 24/7 support.")]),e._v(" "),e._m(50),e._v(" "),e._m(51),e._v(" "),a("ul",[a("li",[e._v("KernelCare website: "),a("a",{attrs:{href:"https://www.kernelcare.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.kernelcare.com"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("KernelCare Blog: "),a("a",{attrs:{href:"https://www.kernelcare.com/blog/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.kernelcare.com/blog/"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("KernelCare Patch Server: "),a("a",{attrs:{href:"http://patches.kernelcare.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://patches.kernelcare.com"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("KernelCare documentation: "),a("a",{attrs:{href:"http://docs.kernelcare.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://docs.kernelcare.com/"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("CloudLinux Network – CLN (Billing Portal): "),a("a",{attrs:{href:"https://cln.cloudlinux.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cln.cloudlinux.com"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("CloudLinux 24/7 online support system: "),a("a",{attrs:{href:"https://cloudlinux.zendesk.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloudlinux.zendesk.com"),a("OutboundLink")],1)])]),e._v(" "),e._m(52),e._v(" "),a("p",[e._v("KernelCare is available in the English language only.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"kernelcare-on-aws-–-deployment-user-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kernelcare-on-aws-–-deployment-user-guide","aria-hidden":"true"}},[this._v("#")]),this._v(" KernelCare on AWS – Deployment User Guide")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introductory-material"}},[e._v("Introductory Material")]),a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[e._v("Introduction")])]),a("li",[a("a",{attrs:{href:"#prerequisites-and-requirements"}},[e._v("Prerequisites and Requirements")])]),a("li",[a("a",{attrs:{href:"#architecture-diagrams"}},[e._v("Architecture Diagrams")])])])]),a("li",[a("a",{attrs:{href:"#planning-guidance"}},[e._v("Planning Guidance")]),a("ul",[a("li",[a("a",{attrs:{href:"#security"}},[e._v("Security")])]),a("li",[a("a",{attrs:{href:"#costs"}},[e._v("Costs")])]),a("li",[a("a",{attrs:{href:"#sizing"}},[e._v("Sizing")])])])]),a("li",[a("a",{attrs:{href:"#deployment-guidance"}},[e._v("Deployment Guidance")]),a("ul",[a("li",[a("a",{attrs:{href:"#deployment-assets"}},[e._v("Deployment Assets")])])])]),a("li",[a("a",{attrs:{href:"#operational-guidance"}},[e._v("Operational Guidance")]),a("ul",[a("li",[a("a",{attrs:{href:"#health-check"}},[e._v("Health Check")])]),a("li",[a("a",{attrs:{href:"#backup-and-recovery"}},[e._v("Backup and Recovery")])]),a("li",[a("a",{attrs:{href:"#routine-maintenance"}},[e._v("Routine Maintenance")])]),a("li",[a("a",{attrs:{href:"#emergency-maintenance"}},[e._v("Emergency Maintenance")])]),a("li",[a("a",{attrs:{href:"#patch-feed-advanced-options"}},[e._v("Patch Feed Advanced Options")])])])]),a("li",[a("a",{attrs:{href:"#support"}},[e._v("Support")]),a("ul",[a("li",[a("a",{attrs:{href:"#support-costs"}},[e._v("Support Costs")])])])]),a("li",[a("a",{attrs:{href:"#accessibility"}},[e._v("Accessibility")]),a("ul",[a("li",[a("a",{attrs:{href:"#reference-materials"}},[e._v("Reference Materials")])]),a("li",[a("a",{attrs:{href:"#localization"}},[e._v("Localization")])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"introductory-material"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introductory-material","aria-hidden":"true"}},[this._v("#")]),this._v(" Introductory Material")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"prerequisites-and-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites-and-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites and Requirements")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Amazon Linux 1, 2")]),e._v(" "),a("li",[e._v("CentOS 6, 7, Xen4CentOS, CentOS-Plus, ElRepo")]),e._v(" "),a("li",[e._v("CloudLinux 6, 7")]),e._v(" "),a("li",[e._v("Debian 7, 8, 9, 8-backports")]),e._v(" "),a("li",[e._v("Oracle Linux 6, 7")]),e._v(" "),a("li",[e._v("ProxmoxVE 3,4,5")]),e._v(" "),a("li",[e._v("RedHat EL 6, 7")]),e._v(" "),a("li",[e._v("Ubuntu 14.04, 16.04, 18.04")]),e._v(" "),a("li",[e._v("Virtuozzo 6")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"architecture-diagrams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#architecture-diagrams","aria-hidden":"true"}},[this._v("#")]),this._v(" Architecture Diagrams")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("cln.cloudlinux.com")]),this._v(" "),t("li",[this._v("patches.kernelcare.com")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/AWS_arch2.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/AWS_proxy_arch2.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# export http_proxy=http://proxy.domain.com:port\n# export https_proxy=http://proxy.domain.com:port\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"planning-guidance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#planning-guidance","aria-hidden":"true"}},[this._v("#")]),this._v(" Planning Guidance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security","aria-hidden":"true"}},[this._v("#")]),this._v(" Security")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"costs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#costs","aria-hidden":"true"}},[this._v("#")]),this._v(" Costs")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[a("strong",[e._v("License Volume")])]),e._v(" "),a("th",[a("strong",[e._v("Monthly Price")])]),e._v(" "),a("th",[a("strong",[e._v("Annual Price")])])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("$3.95")]),e._v(" "),a("td",[e._v("$45")])]),e._v(" "),a("tr",[a("td",[e._v("2-49")]),e._v(" "),a("td",[e._v("$2.95")]),e._v(" "),a("td",[e._v("$33")])]),e._v(" "),a("tr",[a("td",[e._v("50-499")]),e._v(" "),a("td",[e._v("$2.55")]),e._v(" "),a("td",[e._v("$28")])]),e._v(" "),a("tr",[a("td",[e._v("500+")]),e._v(" "),a("td",[e._v("$2.25")]),e._v(" "),a("td",[e._v("$25")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"sizing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sizing","aria-hidden":"true"}},[this._v("#")]),this._v(" Sizing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"deployment-guidance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment-guidance","aria-hidden":"true"}},[this._v("#")]),this._v(" Deployment Guidance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"deployment-assets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment-assets","aria-hidden":"true"}},[this._v("#")]),this._v(" Deployment Assets")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("curl -s -L https://kernelcare.com/installer | bash\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("wget -qq -O - https://kernelcare.com/installer | bash\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ /usr/bin/kcarectl --register KEY\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("KEY")]),this._v(" is the registration key code string provided when you sign up for purchase or trial of the product.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[e._v("Distribute KernelCare agent package (optional – required only for servers with no access to the Internet) and a KernelCare agent configuration file ("),a("code",[e._v("/etc/sysconfig/kcare/kcare.conf")]),e._v(").")]),e._v(" "),a("li",[e._v("Set required environmental variables (optional).")]),e._v(" "),a("li",[e._v("Install KernelCare agent from either locally available package or central KernelCare download location.")]),e._v(" "),a("li",[e._v("Register KernelCare with either license key or IP-based license.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"operational-guidance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operational-guidance","aria-hidden":"true"}},[this._v("#")]),this._v(" Operational Guidance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"health-check"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#health-check","aria-hidden":"true"}},[this._v("#")]),this._v(" Health Check")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/KC-Ent-monit.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ /usr/bin/kcarectl --check\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"backup-and-recovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup-and-recovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Backup and Recovery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There is no reason to backup KernelCare. KernelCare doesn't store any data. You can always re-install and re-register KernelCare.\nTo backup the configuration file of KernelCare if you have modified it, backup the "),t("code",[this._v("/etc/sysconfig/kcare/")]),this._v(" folder.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"routine-maintenance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routine-maintenance","aria-hidden":"true"}},[this._v("#")]),this._v(" Routine Maintenance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"emergency-maintenance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#emergency-maintenance","aria-hidden":"true"}},[this._v("#")]),this._v(" Emergency Maintenance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# kcarectl --unload\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("or complete remove "),t("em",[this._v("kernelcare")]),this._v(" package by running the following command:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("on RPM-based systems"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# rpm -e kernelcare\n")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("on DEB-based systems"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# dpkg --remove kernelcare\n")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"patch-feed-advanced-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#patch-feed-advanced-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Patch Feed Advanced Options")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"test-and-delayed-feeds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-and-delayed-feeds","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("strong",[this._v("Test and Delayed Feeds")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("Test feed")]),this._v(" – the newest patches (test builds) that have not undergone the complete testing process. Test feed makes it possible to start testing new patches earlier.")]),this._v(" "),t("li",[t("strong",[this._v("Delayed feeds")]),this._v(" – instructs KernelCare to skip loading patches that were released within the last 12/24/48 hours.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The alternate feed option is enabled by setting "),a("code",[e._v("PREFIX")]),e._v(" variable in "),a("code",[e._v("/etc/sysconfig/kcare/kcare.conf")]),e._v(" to one of "),a("code",[e._v("test")]),e._v("/"),a("code",[e._v("12h")]),e._v("/"),a("code",[e._v("24h")]),e._v("/"),a("code",[e._v("48h")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"feed-management-with-sticky-patch-feature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feed-management-with-sticky-patch-feature","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("strong",[this._v("Feed Management With Sticky Patch Feature")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/KC-Ent-list.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/KC-Ent-edit.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/KC-Ent-sticky.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ /usr/bin/kcarectl --set-sticky-patch=KEY\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Alternatively, you can do the same by adding "),t("code",[this._v("STICKY_PATCH=KEY")]),this._v(" to the "),t("code",[this._v("/etc/sysconfig/kcare/kcare.conf")]),this._v(" file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("Warning")]),this._v(" "),t("p",[t("strong",[this._v("Do Not")]),this._v(" replace the "),t("code",[this._v("KEY")]),this._v(" word with the actual KernelCare license key used to register the server.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#support","aria-hidden":"true"}},[this._v("#")]),this._v(" Support")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("We answer all support questions within one business day and most within a couple of hours\nTo expedite the support, run the following command on your server (as root user):")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# kcarectl --doctor\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"support-costs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#support-costs","aria-hidden":"true"}},[this._v("#")]),this._v(" Support Costs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"accessibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accessibility","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessibility")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"reference-materials"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference-materials","aria-hidden":"true"}},[this._v("#")]),this._v(" Reference Materials")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"localization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#localization","aria-hidden":"true"}},[this._v("#")]),this._v(" Localization")])}],!1,null,null,null);t.default=n.exports}}]);