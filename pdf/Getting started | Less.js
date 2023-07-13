From: <Saved by Blink>
Snapshot-Content-Location: https://lesscss.org/
Subject: Getting started | Less.js
Date: Mon, 27 Sep 2021 19:16:46 -0000
MIME-Version: 1.0
Content-Type: multipart/related;
	type="text/html";
	boundary="----MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----"


------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: text/html
Content-ID: <frame-F18019BBD1EBAAFC74565EF667D1B04A@mhtml.blink>
Content-Transfer-Encoding: binary
Content-Location: https://lesscss.org/

<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><link rel="stylesheet" type="text/css" href="cid:css-db69138e-e9cc-4da6-8459-c42b40ecdd6f@mhtml.blink" />
    
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Less extends CSS with dynamic behavior such as variables, mixins, operations and functions. Less runs on both the server-side (with Node.js and Rhino) or client-side (modern browsers only).
">
<meta name="author" content="The Core Less Team">

<title>
  Getting started | Less.js
</title>

<link href="https://fonts.googleapis.com/css?family=Noto+Serif|Oxygen" rel="stylesheet">

<!-- Main styles -->
<link href="https://lesscss.org/public/css/index.css" rel="stylesheet">

<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<!-- Favicons -->
<link rel="shortcut icon" href="https://lesscss.org/public/ico/favicon.ico">

  </head>
  <body class="index" style="">

    
      
<div class="docs-header" id="content">
  <div class="container" style="text-align:center">
    <div>
      <img src="https://lesscss.org/public/img/less_logo.png" style="max-width: 264px">
      <h3>It's CSS, with just a little more.</h3>

      <p>Use with Node.js:</p>
      <code>npm install -g less</code><br>
      <code>&gt; lessc styles.less styles.css</code>
      <br><br>
      <p>Or the browser:</p>
      <code>&lt;link rel="stylesheet/less" type="text/css" href="styles.less" /&gt;</code><br>
      <code>&lt;script src="<a href="https://cdn.jsdelivr.net/npm/less@4.1.1">https://cdn.jsdelivr.net/npm/less@4.1.1</a>" &gt;&lt;/script&gt;</code><br>

    </div>
  </div>
</div>


<div class="banner">
  <div class="container">
    View the <a href="https://github.com/less/less.js/blob/master/CHANGELOG.md">Less.js changelog</a>
  </div>
</div>

    
    
    
    <div class="container docs-container">
      <div class="row">
        <div class="col-md-3">
          <div class="sidebar hidden-print" role="complementary">
            <div id="navigation">
  
<ul class="nav sidenav"><li class="active"><a href="https://lesscss.org/#overview">Overview</a></li>
<li class=""><a href="https://lesscss.org/#variables">Variables</a></li>
<li class=""><a href="https://lesscss.org/#mixins">Mixins</a></li>
<li class=""><a href="https://lesscss.org/#nesting">Nesting</a><ul class="nav"><li class=""><a href="https://lesscss.org/#nesting-nested-at-rules-and-bubbling">Nested At-Rules and Bubbling</a></li></ul></li>
<li class=""><a href="https://lesscss.org/#operations">Operations</a><ul class="nav"><li class=""><a href="https://lesscss.org/#operations-calc-exception">calc() exception</a></li></ul></li>
<li class=""><a href="https://lesscss.org/#escaping">Escaping</a></li>
<li class=""><a href="https://lesscss.org/#functions">Functions</a></li>
<li class=""><a href="https://lesscss.org/#namespaces-and-accessors">Namespaces and Accessors</a></li>
<li><a href="https://lesscss.org/#maps">Maps</a></li>
<li><a href="https://lesscss.org/#scope">Scope</a></li>
<li><a href="https://lesscss.org/#comments">Comments</a></li>
<li><a href="https://lesscss.org/#importing">Importing</a></li></ul></div>
<div id="carbonads"><span><span class="carbon-wrap"><a href="https://srv.carbonads.net/ads/click/x/GTND42JICVSIC27LCKBLYKQNCK7I423LC6BI5Z3JCY7ICKQICA7DV53KC6YICKJLF6YI6K7WCKSD423ECKSD653WHEYIKK7LCABIE23ECTNCYBZ52K?segment=placement:lesscssorg;" class="carbon-img" target="_blank" rel="noopener sponsored"><img src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png" alt="ads via Carbon" border="0" height="100" width="130" style="max-width: 130px;"></a><a href="https://srv.carbonads.net/ads/click/x/GTND42JICVSIC27LCKBLYKQNCK7I423LC6BI5Z3JCY7ICKQICA7DV53KC6YICKJLF6YI6K7WCKSD423ECKSD653WHEYIKK7LCABIE23ECTNCYBZ52K?segment=placement:lesscssorg;" class="carbon-text" target="_blank" rel="noopener sponsored">Limited time offer: Get 10 free Adobe Stock images.</a></span><a href="http://carbonads.net/?utm_source=lesscssorg&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon" class="carbon-poweredby" target="_blank" rel="noopener sponsored">ads via Carbon</a></span></div>
          </div>
        </div>
        <div class="col-md-9" role="main">
          
          <header class="navbar navbar-inverse navbar-fixed-top docs-nav" role="banner">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
      <ul class="nav navbar-nav">
        
        <li class="active">
          <span>Overview</span>
        </li>
        

        
        <li>
          <a href="https://lesscss.org/usage/">Using Less.js</a>
        </li>
        

        
        <li>
          <a href="https://lesscss.org/functions/">Functions</a>
        </li>
        

        
        <li>
          <a href="https://lesscss.org/features/">In-Depth Guide</a>
        </li>
        

        

        
        <li>
          <a href="https://lesscss.org/tools/">Tools</a>
        </li>
        

       
        
      </ul>
      <ul class="nav navbar-nav navbar-right">
        
        
        <li class="dropdown">
          <a href="https://lesscss.org/#" class="dropdown-toggle" data-toggle="dropdown">GitHub <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li> <a href="https://github.com/less/less-docs">Docs Repo</a> </li>
            <li> <a href="https://github.com/less/less-docs/issues?&amp;state=open">Docs Issues</a> </li>
            <li class="divider"></li>
            <li> <a href="https://github.com/less/less.js.git">Less Repo</a> </li>
            <li> <a href="https://github.com/less/less.js/issues">Less Issues</a> </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</header>

          
<div class="panel docs-content">
  



<div class="docs-section">
  <div class="">
    <h1 class="docs-heading"><span class="anchor-target" id="overview"></span>
<a href="https://lesscss.org/#overview" name="overview" class="anchor glyphicon glyphicon-link"></a>Overview</h1>
  </div>
  <blockquote>
<p>Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS. This is the official documentation for Less, the language and Less.js, the JavaScript tool that converts your Less styles to CSS styles.</p>
</blockquote>
<p>Because Less looks just like CSS, learning it is a breeze. Less only makes a few convenient additions to the CSS language, which is one of the reasons it can be learned so quickly.</p>
<ul>
<li><em>For detailed documentation on Less language features, see <a href="https://lesscss.org/features/">Features</a></em></li>
<li><em>For a list of Less Built-in functions, see <a href="https://lesscss.org/functions/">Functions</a></em></li>
<li><em>For detailed usage instructions, see <a href="https://lesscss.org/usage/">Using Less.js</a></em></li>
<li><em>For third-party tools for Less, see <a href="https://lesscss.org/tools/">Tools</a></em></li>
</ul>
<p>What does Less add to CSS? Here's a quick overview of features.</p>
<h1 class="docs-heading"><span class="anchor-target" id="variables"></span>
<a href="https://lesscss.org/#variables" name="variables" class="anchor glyphicon glyphicon-link"></a>Variables</h1>
<p>These are pretty self-explanatory:</p>
<pre><code class="lang-less"><span class="hljs-variable">@width:</span> <span class="hljs-number">10px</span>;
<span class="hljs-variable">@height:</span> <span class="hljs-variable">@width</span> + <span class="hljs-number">10px</span>;

<span class="hljs-id">#header</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-variable">@width</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-variable">@height</span>;
}
</code></pre>
<p>Outputs:</p>
<pre><code class="lang-css"><span class="hljs-id">#header</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;
}
</code></pre>
<p><strong><a href="https://lesscss.org/features/#variables-feature">Learn More About Variables</a></strong> </p>
<h1 class="docs-heading"><span class="anchor-target" id="mixins"></span>
<a href="https://lesscss.org/#mixins" name="mixins" class="anchor glyphicon glyphicon-link"></a>Mixins</h1>
<p>Mixins are a way of including ("mixing in") a bunch of properties from one rule-set into another rule-set. So say we have the following class:</p>
<pre><code class="lang-css"><span class="hljs-class">.bordered</span> {
  <span class="hljs-attribute">border-top</span>: dotted <span class="hljs-number">1px</span> black;
  <span class="hljs-attribute">border-bottom</span>: solid <span class="hljs-number">2px</span> black;
}
</code></pre>
<p>And we want to use these properties inside other rule-sets. Well, we just have to drop in the name of the class where we want the properties, like so:</p>
<pre><code class="lang-less"><span class="hljs-id">#menu</span> <span class="hljs-tag">a</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-hexcolor">#111</span>;
  <span class="hljs-class">.bordered</span>();
}

<span class="hljs-class">.post</span> <span class="hljs-tag">a</span> {
  <span class="hljs-attribute">color</span>: red;
  <span class="hljs-class">.bordered</span>();
}
</code></pre>
<p>The properties of the <code>.bordered</code> class will now appear in both <code>#menu a</code> and <code>.post a</code>. (Note that you can also use <code>#ids</code> as mixins.)</p>
<p><strong><a href="https://lesscss.org/features/#mixins-feature">Learn More About Mixins</a></strong> </p>
<h1 class="docs-heading"><span class="anchor-target" id="nesting"></span>
<a href="https://lesscss.org/#nesting" name="nesting" class="anchor glyphicon glyphicon-link"></a>Nesting</h1>
<p>Less gives you the ability to use nesting instead of, or in combination with cascading. Let's say we have the following CSS:</p>
<pre><code class="lang-css"><span class="hljs-id">#header</span> {
  <span class="hljs-attribute">color</span>: black;
}
<span class="hljs-id">#header</span> <span class="hljs-class">.navigation</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
}
<span class="hljs-id">#header</span> <span class="hljs-class">.logo</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
}
</code></pre>
<p>In Less, we can also write it this way:</p>
<pre><code class="lang-less"><span class="hljs-id">#header</span> {
  <span class="hljs-attribute">color</span>: black;
  <span class="hljs-class">.navigation</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  }
  <span class="hljs-class">.logo</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
  }
}
</code></pre>
<p>The resulting code is more concise, and mimics the structure of your HTML.</p>
<p>You can also bundle pseudo-selectors with your mixins using this method. Here's the classic clearfix hack, rewritten as a mixin (<code>&amp;</code> represents the current selector parent):</p>
<pre><code class="lang-less"><span class="hljs-class">.clearfix</span> {
  <span class="hljs-attribute">display</span>: block;
  <span class="hljs-attribute">zoom</span>: <span class="hljs-number">1</span>;

  <span class="hljs-keyword">&amp;</span><span class="hljs-pseudo">:after</span> {
    <span class="hljs-attribute">content</span>: <span class="hljs-string">" "</span>;
    <span class="hljs-attribute">display</span>: block;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">clear</span>: both;
    <span class="hljs-attribute">visibility</span>: hidden;
  }
}
</code></pre>
<p><strong><a href="https://lesscss.org/features/#parent-selectors-feature">Learn More About Parent Selectors</a></strong> </p>
<h2 class="docs-heading"><span class="anchor-target" id="nesting-nested-at-rules-and-bubbling"></span>
<a href="https://lesscss.org/#nesting-nested-at-rules-and-bubbling" name="nesting-nested-at-rules-and-bubbling" class="anchor glyphicon glyphicon-link"></a>Nested At-Rules and Bubbling</h2>
<p>At-rules such as <code>@media</code> or <code>@supports</code> can be nested in the same way as selectors. The at-rule is placed on top and relative order against other elements inside the same ruleset remains unchanged. This is called bubbling.</p>
<pre><code class="lang-less"><span class="hljs-class">.component</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
  <span class="hljs-at_rule">@media</span> (min-width: <span class="hljs-number">768px</span>) {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">600px</span>;
    <span class="hljs-at_rule">@media</span>  (min-resolution: <span class="hljs-number">192dpi</span>) {
      <span class="hljs-attribute">background-image</span>: url(<span class="hljs-string">/img/retina2x.png</span>);
    }
  }
  <span class="hljs-at_rule">@media</span> (min-width: <span class="hljs-number">1280px</span>) {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">800px</span>;
  }
}

</code></pre>
<p>outputs:</p>
<pre><code class="lang-css"><span class="hljs-class">.component</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
}
<span class="hljs-at_rule">@media</span> (min-width: <span class="hljs-number">768px</span>) {
  <span class="hljs-class">.component</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">600px</span>;
  }
}
<span class="hljs-at_rule">@media</span> (min-width: <span class="hljs-number">768px</span>) and (min-resolution: <span class="hljs-number">192dpi</span>) {
  <span class="hljs-class">.component</span> {
    <span class="hljs-attribute">background-image</span>: url(<span class="hljs-string">/img/retina2x.png</span>);
  }
}
<span class="hljs-at_rule">@media</span> (min-width: <span class="hljs-number">1280px</span>) {
  <span class="hljs-class">.component</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">800px</span>;
  }
}
</code></pre>
<h1 class="docs-heading"><span class="anchor-target" id="operations"></span>
<a href="https://lesscss.org/#operations" name="operations" class="anchor glyphicon glyphicon-link"></a>Operations</h1>
<p>Arithmetical operations <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> can operate on any number, color or variable. If it is possible, mathematical operations take units into account and convert numbers before adding, subtracting or comparing them. The result has leftmost explicitly stated unit type. If the conversion is impossible or not meaningful, units are ignored. Example of impossible conversion: px to cm or rad to %.</p>
<pre><code class="lang-less"><span class="hljs-comment">// numbers are converted into the same units</span>
<span class="hljs-variable">@conversion-1:</span> <span class="hljs-number">5cm</span> + <span class="hljs-number">10mm</span>; <span class="hljs-comment">// result is 6cm</span>
<span class="hljs-variable">@conversion-2:</span> <span class="hljs-number">2</span> - <span class="hljs-number">3cm</span> - <span class="hljs-number">5mm</span>; <span class="hljs-comment">// result is -1.5cm</span>

<span class="hljs-comment">// conversion is impossible</span>
<span class="hljs-variable">@incompatible-units:</span> <span class="hljs-number">2</span> + <span class="hljs-number">5px</span> - <span class="hljs-number">3cm</span>; <span class="hljs-comment">// result is 4px</span>

<span class="hljs-comment">// example with variables</span>
<span class="hljs-variable">@base:</span> <span class="hljs-number">5%</span>;
<span class="hljs-variable">@filler:</span> <span class="hljs-variable">@base</span> * <span class="hljs-number">2</span>; <span class="hljs-comment">// result is 10%</span>
<span class="hljs-variable">@other:</span> <span class="hljs-variable">@base</span> + <span class="hljs-variable">@filler</span>; <span class="hljs-comment">// result is 15%</span>
</code></pre>
<p>Multiplication and division do not convert numbers. It would not be meaningful in most cases - a length multiplied by a length gives an area and css does not support specifying areas. Less will operate on numbers as they are and assign explicitly stated unit type to the result.</p>
<pre><code class="lang-less"><span class="hljs-variable">@base:</span> <span class="hljs-number">2cm</span> * <span class="hljs-number">3mm</span>; <span class="hljs-comment">// result is 6cm</span>
</code></pre>
<p>You can also do arithmetic on colors:</p>
<pre><code class="lang-less"><span class="hljs-variable">@color:</span> <span class="hljs-hexcolor">#224488</span> / <span class="hljs-number">2</span>; <span class="hljs-comment">//results in #112244</span>
<span class="hljs-attribute">background-color</span>: <span class="hljs-hexcolor">#112244</span> + <span class="hljs-hexcolor">#111</span>; <span class="hljs-comment">// result is #223355</span>
</code></pre>
<p>However, you may find Less's <a href="https://lesscss.org/functions/#color-operations">Color Functions</a> more useful.</p>
<h2 class="docs-heading"><span class="anchor-target" id="operations-calc-exception"></span>
<a href="https://lesscss.org/#operations-calc-exception" name="operations-calc-exception" class="anchor glyphicon glyphicon-link"></a>calc() exception</h2>
<p><em>Released <a href="https://github.com/less/less.js/blob/master/CHANGELOG.md">v3.0.0</a></em></p>
<p>For CSS compatibility, <code>calc()</code> does not evaluate math expressions, but will evaluate variables
and math in nested functions.</p>
<pre><code class="lang-less"><span class="hljs-variable">@var:</span> <span class="hljs-number">50vh</span>/<span class="hljs-number">2</span>;
<span class="hljs-attribute">width</span>: <span class="hljs-function">calc</span>(<span class="hljs-number">50%</span> + (<span class="hljs-variable">@var</span> - <span class="hljs-number">20px</span>));  <span class="hljs-comment">// result is calc(50% + (25vh - 20px))</span>
</code></pre>
<h1 class="docs-heading"><span class="anchor-target" id="escaping"></span>
<a href="https://lesscss.org/#escaping" name="escaping" class="anchor glyphicon glyphicon-link"></a>Escaping</h1>
<p>Escaping allows you to use any arbitrary string as property or variable value. Anything inside <code>~"anything"</code> or <code>~'anything'</code> is used as is with no changes except <a href="https://lesscss.org/features/#variables-feature-variable-interpolation">interpolation</a>.</p>
<pre><code class="lang-less"><span class="hljs-variable">@min768:</span> <span class="hljs-string">~"(min-width: 768px)"</span>;
<span class="hljs-class">.element</span> {
  <span class="hljs-at_rule">@media</span> <span class="hljs-variable">@min768</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.2rem</span>;
  }
}
</code></pre>
<p>results in:</p>
<pre><code class="lang-less"><span class="hljs-at_rule">@media</span> (min-width: <span class="hljs-number">768px</span>) {
  <span class="hljs-class">.element</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.2rem</span>;
  }
}
</code></pre>
<p>Note, as of Less 3.5, you can simply write:</p>
<pre><code class="lang-less"><span class="hljs-variable">@min768:</span> (min-width: <span class="hljs-number">768px</span>);
<span class="hljs-class">.element</span> {
  <span class="hljs-at_rule">@media</span> <span class="hljs-variable">@min768</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.2rem</span>;
  }
}
</code></pre>
<p>In 3.5+, many cases previously requiring "quote-escaping" are not needed.</p>
<h1 class="docs-heading"><span class="anchor-target" id="functions"></span>
<a href="https://lesscss.org/#functions" name="functions" class="anchor glyphicon glyphicon-link"></a>Functions</h1>
<p>Less provides a variety of functions which transform colors, manipulate strings and do maths. They are documented fully in the <a href="https://lesscss.org/functions/">function reference</a>.</p>
<p>Using them is pretty straightforward. The following example uses percentage to convert 0.5 to 50%, increases the saturation of a base color by 5% and then sets the background color to one that is lightened by 25% and spun by 8 degrees:</p>
<pre><code class="lang-less"><span class="hljs-variable">@base:</span> <span class="hljs-hexcolor">#f04615</span>;
<span class="hljs-variable">@width:</span> <span class="hljs-number">0.5</span>;

<span class="hljs-class">.class</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-function">percentage</span>(<span class="hljs-variable">@width</span>); <span class="hljs-comment">// returns `50%`</span>
  <span class="hljs-attribute">color</span>: <span class="hljs-function">saturate</span>(<span class="hljs-variable">@base</span>, <span class="hljs-number">5%</span>);
  <span class="hljs-attribute">background-color</span>: <span class="hljs-function">spin</span>(<span class="hljs-function">lighten</span>(<span class="hljs-variable">@base</span>, <span class="hljs-number">25%</span>), <span class="hljs-number">8</span>);
}
</code></pre>
<p><strong><a href="https://lesscss.org/functions/">See: Function Reference</a></strong> </p>
<h1 class="docs-heading"><span class="anchor-target" id="namespaces-and-accessors"></span>
<a href="https://lesscss.org/#namespaces-and-accessors" name="namespaces-and-accessors" class="anchor glyphicon glyphicon-link"></a>Namespaces and Accessors</h1>
<p>(Not to be confused with <a href="http://www.w3.org/TR/css3-namespace/">CSS <code>@namespace</code></a> or <a href="http://www.w3.org/TR/css3-selectors/#typenmsp">namespace selectors</a>).</p>
<p>Sometimes, you may want to group your mixins, for organizational purposes, or just to offer some encapsulation. You can do this pretty intuitively in Less. Say you want to bundle some mixins and variables under <code>#bundle</code>, for later reuse or distributing:</p>
<pre><code class="lang-less"><span class="hljs-id">#bundle</span>() {
  <span class="hljs-class">.button</span> {
    <span class="hljs-attribute">display</span>: block;
    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid black;
    <span class="hljs-attribute">background-color</span>: grey;
    <span class="hljs-keyword">&amp;</span><span class="hljs-pseudo">:hover</span> {
      <span class="hljs-attribute">background-color</span>: white;
    }
  }
  <span class="hljs-class">.tab</span> { ... }
  <span class="hljs-class">.citation</span> { ... }
}
</code></pre>
<p>Now if we want to mixin the <code>.button</code> class in our <code>#header a</code>, we can do:</p>
<pre><code class="lang-less"><span class="hljs-id">#header</span> <span class="hljs-tag">a</span> {
  <span class="hljs-attribute">color</span>: orange;
  <span class="hljs-id">#bundle</span><span class="hljs-class">.button</span>();  <span class="hljs-comment">// can also be written as #bundle &gt; .button</span>
}
</code></pre>
<p>Note: append <code>()</code> to your namespace (e.g. <code>#bundle()</code>) if you don't want it to appear in your CSS output i.e. <code>#bundle .tab</code>.</p>
<h1 class="docs-heading"><span class="anchor-target" id="maps"></span>
<a href="https://lesscss.org/#maps" name="maps" class="anchor glyphicon glyphicon-link"></a>Maps</h1>
<p>As of Less 3.5, you can also use mixins and rulesets as maps of values.</p>
<pre><code class="lang-less"><span class="hljs-id">#colors</span>() {
  <span class="hljs-attribute">primary</span>: blue;
  <span class="hljs-attribute">secondary</span>: green;
}

<span class="hljs-class">.button</span> {
  <span class="hljs-attribute">color</span>: #colors[primary];
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid #colors[secondary];
}
</code></pre>
<p>This outputs, as expected:</p>
<pre><code class="lang-css"><span class="hljs-class">.button</span> {
  <span class="hljs-attribute">color</span>: blue;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid green;
}
</code></pre>
<p><strong><a href="https://lesscss.org/features/#maps-feature">See also: Maps</a></strong></p>
<h1 class="docs-heading"><span class="anchor-target" id="scope"></span>
<a href="https://lesscss.org/#scope" name="scope" class="anchor glyphicon glyphicon-link"></a>Scope</h1>
<p>Scope in Less is very similar to that of CSS. Variables and mixins are first looked for locally, and if they aren't found, it's inherited from the "parent" scope.</p>
<pre><code class="lang-less"><span class="hljs-variable">@var:</span> red;

<span class="hljs-id">#page</span> {
  <span class="hljs-variable">@var:</span> white;
  <span class="hljs-id">#header</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-variable">@var</span>; <span class="hljs-comment">// white</span>
  }
}
</code></pre>
<p>Like CSS custom properties, mixin and variable definitions do not have to be placed before a line where they are referenced. So the following Less code is identical to the previous example:</p>
<pre><code class="lang-less"><span class="hljs-variable">@var:</span> red;

<span class="hljs-id">#page</span> {
  <span class="hljs-id">#header</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-variable">@var</span>; <span class="hljs-comment">// white</span>
  }
  <span class="hljs-variable">@var:</span> white;
}
</code></pre>
<p><strong><a href="https://lesscss.org/features/#variables-feature-lazy-loading">See also: Lazy Loading</a></strong></p>
<h1 class="docs-heading"><span class="anchor-target" id="comments"></span>
<a href="https://lesscss.org/#comments" name="comments" class="anchor glyphicon glyphicon-link"></a>Comments</h1>
<p>Both block-style and inline comments may be used:</p>
<pre><code class="lang-less"><span class="hljs-comment">/* One heck of a block
 * style comment! */</span>
<span class="hljs-variable">@var:</span> red;

<span class="hljs-comment">// Get in line!</span>
<span class="hljs-variable">@var:</span> white;
</code></pre>
<h1 class="docs-heading"><span class="anchor-target" id="importing"></span>
<a href="https://lesscss.org/#importing" name="importing" class="anchor glyphicon glyphicon-link"></a>Importing</h1>
<p>Importing works pretty much as expected. You can import a <code>.less</code> file, and all the variables in it will be available. The extension is optionally specified for <code>.less</code> files.</p>
<pre><code class="lang-css"><span class="hljs-at_rule">@import</span> <span class="hljs-string">"library"</span>; <span class="hljs-comment">// library.less</span>
<span class="hljs-at_rule">@import</span> <span class="hljs-string">"typo.css"</span>;
</code></pre>
<p><strong><a href="https://lesscss.org/features/#imports-feature">Learn More About Imports</a></strong> </p>

</div>



</div>
        </div>
      </div>
    </div>

    
    <footer class="footer" role="contentinfo">
  <div class="container">
    <div class="bs-social">
  <ul class="bs-social-buttons">
    <li>
      <iframe class="github-btn" src="cid:frame-BCD39C632527B9B045E1BBBE5AD1F458@mhtml.blink" width="100" height="20" title="Star on GitHub"></iframe>
    </li>
    <li>
      <iframe class="github-btn" src="cid:frame-693701378F0C5455B2D9CC01FCFFD84C@mhtml.blink" width="102" height="20" title="Fork on GitHub"></iframe>
    </li>
  </ul>
</div>

    <p>Less and these docs are maintained by <a href="https://lesscss.org/about/#team">the core Less team</a>.</p>
    <p>Documentation source code released under the <a href="https://github.com/less/less-docs/blob/master/LICENSE-MIT" target="_blank">MIT License</a>, documentation under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.</p>
    <ul class="footer-links">
      <li>Currently v4.1.1</li>
      
      <li class="muted">·</li>
      <li><a href="https://github.com/less/less.js/issues">Less Language and Compiler Issues</a></li>
      <li class="muted">·</li>
      <li><a href="https://github.com/less/less-docs/issues?&amp;state=open">Less Docs Issues</a></li>
      <li class="muted">·</li>
      <li><a href="https://github.com/less/less.js/blob/master/CHANGELOG.md">Changelog</a></li>
      
    </ul>
  </div>
</footer>


    
    <!-- Core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->










  

</body></html>
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: text/css
Content-Transfer-Encoding: binary
Content-Location: cid:css-db69138e-e9cc-4da6-8459-c42b40ecdd6f@mhtml.blink

@charset "utf-8";


------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: text/css
Content-Transfer-Encoding: binary
Content-Location: https://fonts.googleapis.com/css?family=Noto+Serif|Oxygen

@charset "utf-8";

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFoWaDq8fMVxMw.woff2") format("woff2"); unicode-range: U+460-52F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F; }

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFMWaDq8fMVxMw.woff2") format("woff2"); unicode-range: U+400-45F, U+490-491, U+4B0-4B1, U+2116; }

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFsWaDq8fMVxMw.woff2") format("woff2"); unicode-range: U+1F00-1FFF; }

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFQWaDq8fMVxMw.woff2") format("woff2"); unicode-range: U+370-3FF; }

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFgWaDq8fMVxMw.woff2") format("woff2"); unicode-range: U+102-103, U+110-111, U+128-129, U+168-169, U+1A0-1A1, U+1AF-1B0, U+1EA0-1EF9, U+20AB; }

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFkWaDq8fMVxMw.woff2") format("woff2"); unicode-range: U+100-24F, U+259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFcWaDq8fMU.woff2") format("woff2"); unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }

@font-face { font-family: Oxygen; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/oxygen/v10/2sDfZG1Wl4LcnbuKgE0mRUe0A4Uc.woff2") format("woff2"); unicode-range: U+100-24F, U+259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }

@font-face { font-family: Oxygen; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/oxygen/v10/2sDfZG1Wl4LcnbuKjk0mRUe0Aw.woff2") format("woff2"); unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: text/css
Content-Transfer-Encoding: binary
Content-Location: https://lesscss.org/public/css/index.css

@charset "utf-8";

article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary { display: block; }

audio, canvas, video { display: inline-block; }

audio:not([controls]) { display: none; height: 0px; }

[hidden], template { display: none; }

html { font-family: sans-serif; text-size-adjust: 100%; }

body { margin: 0px; }

a { background: transparent; }

a:focus { outline: dotted thin; }

a:active, a:hover { outline: 0px; }

h1 { font-size: 2em; margin: 0.67em 0px; }

abbr[title] { border-bottom: 1px dotted; }

b, strong { font-weight: bold; }

dfn { font-style: italic; }

hr { box-sizing: content-box; height: 0px; }

mark { background: rgb(255, 255, 0); color: rgb(0, 0, 0); }

code, kbd, pre, samp { font-family: monospace, serif; font-size: 1em; }

pre { white-space: pre-wrap; }

q { quotes: "“" "”" "‘" "’"; }

small { font-size: 80%; }

sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }

sup { top: -0.5em; }

sub { bottom: -0.25em; }

img { border: 0px; }

svg:not(:root) { overflow: hidden; }

figure { margin: 0px; }

fieldset { border: 1px solid rgb(192, 192, 192); margin: 0px 2px; padding: 0.35em 0.625em 0.75em; }

legend { border: 0px; padding: 0px; }

button, input, select, textarea { font-family: inherit; font-size: 100%; margin: 0px; }

button, input { line-height: normal; }

button, select { text-transform: none; }

button, html input[type="button"], input[type="reset"], input[type="submit"] { appearance: button; cursor: pointer; }

button[disabled], html input[disabled] { cursor: default; }

input[type="checkbox"], input[type="radio"] { box-sizing: border-box; padding: 0px; }

input[type="search"] { appearance: textfield; box-sizing: content-box; }

input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration { appearance: none; }

textarea { overflow: auto; vertical-align: top; }

table { border-collapse: collapse; border-spacing: 0px; }

@media print {
  * { text-shadow: none !important; color: rgb(0, 0, 0) !important; background: transparent !important; box-shadow: none !important; }
  a, a:visited { text-decoration: underline; }
  a[href]::after { content: " (" attr(href) ")"; }
  abbr[title]::after { content: " (" attr(title) ")"; }
  .ir a::after, a[href^="javascript:"]::after, a[href^="#"]::after { content: ""; }
  pre, blockquote { border: 1px solid rgb(153, 153, 153); break-inside: avoid; }
  thead { display: table-header-group; }
  tr, img { break-inside: avoid; }
  img { max-width: 100% !important; }
  @page { margin: 2cm 0.5cm; }
  p, h2, h3 { orphans: 3; widows: 3; }
  h2, h3 { break-after: avoid; }
  .navbar { display: none; }
  .table td, .table th { background-color: rgb(255, 255, 255) !important; }
  .btn > .caret, .dropup > .btn > .caret { border-top-color: rgb(0, 0, 0) !important; }
  .label { border: 1px solid rgb(0, 0, 0); }
  .table { border-collapse: collapse !important; }
  .table-bordered th, .table-bordered td { border: 1px solid rgb(221, 221, 221) !important; }
}

p { margin: 0px 0px 10px; }

small, .small { font-size: 85%; }

cite { font-style: normal; }

.text-muted { color: rgb(153, 153, 153); }

.text-primary { color: rgb(66, 139, 202); }

.text-primary:hover { color: rgb(48, 113, 169); }

.text-warning { color: rgb(192, 152, 83); }

.text-warning:hover { color: rgb(164, 126, 60); }

.text-danger { color: rgb(185, 74, 72); }

.text-danger:hover { color: rgb(149, 59, 57); }

.text-success { color: rgb(70, 136, 71); }

.text-success:hover { color: rgb(53, 102, 53); }

.text-info { color: rgb(58, 135, 173); }

.text-info:hover { color: rgb(45, 105, 135); }

.text-left { text-align: left; }

.text-right { text-align: right; }

.text-center { text-align: center; }

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 { font-family: Oxygen, "Helvetica Neue", Helvetica, Arial, sans-serif; font-weight: 500; line-height: 1.1; color: rgb(29, 54, 93); }

h1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small, h1 .small, h2 .small, h3 .small, h4 .small, h5 .small, h6 .small, .h1 .small, .h2 .small, .h3 .small, .h4 .small, .h5 .small, .h6 .small { font-weight: normal; line-height: 1; color: rgb(153, 153, 153); }

h1, h2, h3 { margin-top: 20px; margin-bottom: 10px; }

h1 small, h2 small, h3 small, h1 .small, h2 .small, h3 .small { font-size: 65%; }

h4, h5, h6 { margin-top: 10px; margin-bottom: 10px; }

h4 small, h5 small, h6 small, h4 .small, h5 .small, h6 .small { font-size: 75%; }

h1, .h1 { font-size: 35px; }

h2, .h2 { font-size: 28px; }

h3, .h3 { font-size: 25px; }

h4, .h4 { font-size: 21px; }

h5, .h5 { font-size: 14px; }

h6, .h6 { font-size: 12px; }

.page-header { padding-bottom: 9px; margin: 40px 0px 20px; border-bottom: 1px solid rgb(238, 238, 238); }

ul, ol { margin-top: 0px; margin-bottom: 10px; }

ul ul, ol ul, ul ol, ol ol { margin-bottom: 0px; }

.list-unstyled { padding-left: 0px; list-style: none; }

.list-inline { padding-left: 0px; list-style: none; }

.list-inline > li { display: inline-block; padding-left: 5px; padding-right: 5px; }

dl { margin-bottom: 20px; }

dt, dd { line-height: 1.42857; }

dt { font-weight: bold; }

dd { margin-left: 0px; }

@media (min-width: 768px) {
  .dl-horizontal dt { float: left; width: 160px; clear: left; text-align: right; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .dl-horizontal dd { margin-left: 180px; }
  .dl-horizontal dd::before, .dl-horizontal dd::after { content: " "; display: table; }
  .dl-horizontal dd::after { clear: both; }
  .dl-horizontal dd::before, .dl-horizontal dd::after { content: " "; display: table; }
  .dl-horizontal dd::after { clear: both; }
}

abbr[title], abbr[data-original-title] { cursor: help; border-bottom: 1px dotted rgb(153, 153, 153); }

abbr.initialism { font-size: 90%; text-transform: uppercase; }

blockquote { padding: 10px 20px; margin: 0px 0px 20px; border-left: 4px solid rgb(238, 238, 238); }

blockquote p { color: rgb(122, 122, 122); font-weight: 300; line-height: 1.25; }

blockquote p:last-child { margin-bottom: 0px; }

blockquote small { display: block; line-height: 1.42857; color: rgb(153, 153, 153); }

blockquote small::before { content: "— "; }

blockquote.pull-right { padding-right: 15px; padding-left: 0px; border-right: 5px solid rgb(238, 238, 238); border-left: 0px; }

blockquote.pull-right p, blockquote.pull-right small, blockquote.pull-right .small { text-align: right; }

blockquote.pull-right small::before, blockquote.pull-right .small::before { content: ""; }

blockquote.pull-right small::after, blockquote.pull-right .small::after { content: " —"; }

blockquote::before, blockquote::after { content: ""; }

address { margin-bottom: 20px; font-style: normal; line-height: 1.42857; }

code, kbd, pre, samp { font-family: Monaco, Menlo, Consolas, "Courier New", monospace; }

code { padding: 2px 4px; font-size: 90%; color: rgb(66, 139, 202); background-color: rgb(245, 245, 245); white-space: nowrap; border-radius: 4px; }

pre { display: block; padding: 9.5px; margin: 0px 0px 10px; font-size: 13px; line-height: 1.42857; word-break: break-all; overflow-wrap: break-word; color: rgb(51, 51, 51); background-color: rgb(245, 245, 245); border: 1px solid rgb(204, 204, 204); border-radius: 4px; }

pre code { padding: 0px; font-size: inherit; color: inherit; white-space: pre-wrap; background-color: transparent; border-radius: 0px; }

.pre-scrollable { max-height: 340px; overflow-y: scroll; }

.container { margin-right: auto; margin-left: auto; padding-left: 15px; padding-right: 15px; }

.container::before, .container::after { content: " "; display: table; }

.container::after { clear: both; }

.container::before, .container::after { content: " "; display: table; }

.container::after { clear: both; }

.row { margin-left: -15px; margin-right: -15px; }

.row::before, .row::after { content: " "; display: table; }

.row::after { clear: both; }

.row::before, .row::after { content: " "; display: table; }

.row::after { clear: both; }

.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 { position: relative; min-height: 1px; padding-left: 15px; padding-right: 15px; }

.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11 { float: left; }

.col-xs-12 { width: 100%; }

.col-xs-11 { width: 91.6667%; }

.col-xs-10 { width: 83.3333%; }

.col-xs-9 { width: 75%; }

.col-xs-8 { width: 66.6667%; }

.col-xs-7 { width: 58.3333%; }

.col-xs-6 { width: 50%; }

.col-xs-5 { width: 41.6667%; }

.col-xs-4 { width: 33.3333%; }

.col-xs-3 { width: 25%; }

.col-xs-2 { width: 16.6667%; }

.col-xs-1 { width: 8.33333%; }

.col-xs-pull-12 { right: 100%; }

.col-xs-pull-11 { right: 91.6667%; }

.col-xs-pull-10 { right: 83.3333%; }

.col-xs-pull-9 { right: 75%; }

.col-xs-pull-8 { right: 66.6667%; }

.col-xs-pull-7 { right: 58.3333%; }

.col-xs-pull-6 { right: 50%; }

.col-xs-pull-5 { right: 41.6667%; }

.col-xs-pull-4 { right: 33.3333%; }

.col-xs-pull-3 { right: 25%; }

.col-xs-pull-2 { right: 16.6667%; }

.col-xs-pull-1 { right: 8.33333%; }

.col-xs-push-12 { left: 100%; }

.col-xs-push-11 { left: 91.6667%; }

.col-xs-push-10 { left: 83.3333%; }

.col-xs-push-9 { left: 75%; }

.col-xs-push-8 { left: 66.6667%; }

.col-xs-push-7 { left: 58.3333%; }

.col-xs-push-6 { left: 50%; }

.col-xs-push-5 { left: 41.6667%; }

.col-xs-push-4 { left: 33.3333%; }

.col-xs-push-3 { left: 25%; }

.col-xs-push-2 { left: 16.6667%; }

.col-xs-push-1 { left: 8.33333%; }

.col-xs-offset-12 { margin-left: 100%; }

.col-xs-offset-11 { margin-left: 91.6667%; }

.col-xs-offset-10 { margin-left: 83.3333%; }

.col-xs-offset-9 { margin-left: 75%; }

.col-xs-offset-8 { margin-left: 66.6667%; }

.col-xs-offset-7 { margin-left: 58.3333%; }

.col-xs-offset-6 { margin-left: 50%; }

.col-xs-offset-5 { margin-left: 41.6667%; }

.col-xs-offset-4 { margin-left: 33.3333%; }

.col-xs-offset-3 { margin-left: 25%; }

.col-xs-offset-2 { margin-left: 16.6667%; }

.col-xs-offset-1 { margin-left: 8.33333%; }

@media (min-width: 768px) {
  .container { width: 750px; }
  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11 { float: left; }
  .col-sm-12 { width: 100%; }
  .col-sm-11 { width: 91.6667%; }
  .col-sm-10 { width: 83.3333%; }
  .col-sm-9 { width: 75%; }
  .col-sm-8 { width: 66.6667%; }
  .col-sm-7 { width: 58.3333%; }
  .col-sm-6 { width: 50%; }
  .col-sm-5 { width: 41.6667%; }
  .col-sm-4 { width: 33.3333%; }
  .col-sm-3 { width: 25%; }
  .col-sm-2 { width: 16.6667%; }
  .col-sm-1 { width: 8.33333%; }
  .col-sm-pull-12 { right: 100%; }
  .col-sm-pull-11 { right: 91.6667%; }
  .col-sm-pull-10 { right: 83.3333%; }
  .col-sm-pull-9 { right: 75%; }
  .col-sm-pull-8 { right: 66.6667%; }
  .col-sm-pull-7 { right: 58.3333%; }
  .col-sm-pull-6 { right: 50%; }
  .col-sm-pull-5 { right: 41.6667%; }
  .col-sm-pull-4 { right: 33.3333%; }
  .col-sm-pull-3 { right: 25%; }
  .col-sm-pull-2 { right: 16.6667%; }
  .col-sm-pull-1 { right: 8.33333%; }
  .col-sm-push-12 { left: 100%; }
  .col-sm-push-11 { left: 91.6667%; }
  .col-sm-push-10 { left: 83.3333%; }
  .col-sm-push-9 { left: 75%; }
  .col-sm-push-8 { left: 66.6667%; }
  .col-sm-push-7 { left: 58.3333%; }
  .col-sm-push-6 { left: 50%; }
  .col-sm-push-5 { left: 41.6667%; }
  .col-sm-push-4 { left: 33.3333%; }
  .col-sm-push-3 { left: 25%; }
  .col-sm-push-2 { left: 16.6667%; }
  .col-sm-push-1 { left: 8.33333%; }
  .col-sm-offset-12 { margin-left: 100%; }
  .col-sm-offset-11 { margin-left: 91.6667%; }
  .col-sm-offset-10 { margin-left: 83.3333%; }
  .col-sm-offset-9 { margin-left: 75%; }
  .col-sm-offset-8 { margin-left: 66.6667%; }
  .col-sm-offset-7 { margin-left: 58.3333%; }
  .col-sm-offset-6 { margin-left: 50%; }
  .col-sm-offset-5 { margin-left: 41.6667%; }
  .col-sm-offset-4 { margin-left: 33.3333%; }
  .col-sm-offset-3 { margin-left: 25%; }
  .col-sm-offset-2 { margin-left: 16.6667%; }
  .col-sm-offset-1 { margin-left: 8.33333%; }
}

@media (min-width: 992px) {
  .container { width: 970px; }
  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11 { float: left; }
  .col-md-12 { width: 100%; }
  .col-md-11 { width: 91.6667%; }
  .col-md-10 { width: 83.3333%; }
  .col-md-9 { width: 75%; }
  .col-md-8 { width: 66.6667%; }
  .col-md-7 { width: 58.3333%; }
  .col-md-6 { width: 50%; }
  .col-md-5 { width: 41.6667%; }
  .col-md-4 { width: 33.3333%; }
  .col-md-3 { width: 25%; }
  .col-md-2 { width: 16.6667%; }
  .col-md-1 { width: 8.33333%; }
  .col-md-pull-12 { right: 100%; }
  .col-md-pull-11 { right: 91.6667%; }
  .col-md-pull-10 { right: 83.3333%; }
  .col-md-pull-9 { right: 75%; }
  .col-md-pull-8 { right: 66.6667%; }
  .col-md-pull-7 { right: 58.3333%; }
  .col-md-pull-6 { right: 50%; }
  .col-md-pull-5 { right: 41.6667%; }
  .col-md-pull-4 { right: 33.3333%; }
  .col-md-pull-3 { right: 25%; }
  .col-md-pull-2 { right: 16.6667%; }
  .col-md-pull-1 { right: 8.33333%; }
  .col-md-push-12 { left: 100%; }
  .col-md-push-11 { left: 91.6667%; }
  .col-md-push-10 { left: 83.3333%; }
  .col-md-push-9 { left: 75%; }
  .col-md-push-8 { left: 66.6667%; }
  .col-md-push-7 { left: 58.3333%; }
  .col-md-push-6 { left: 50%; }
  .col-md-push-5 { left: 41.6667%; }
  .col-md-push-4 { left: 33.3333%; }
  .col-md-push-3 { left: 25%; }
  .col-md-push-2 { left: 16.6667%; }
  .col-md-push-1 { left: 8.33333%; }
  .col-md-offset-12 { margin-left: 100%; }
  .col-md-offset-11 { margin-left: 91.6667%; }
  .col-md-offset-10 { margin-left: 83.3333%; }
  .col-md-offset-9 { margin-left: 75%; }
  .col-md-offset-8 { margin-left: 66.6667%; }
  .col-md-offset-7 { margin-left: 58.3333%; }
  .col-md-offset-6 { margin-left: 50%; }
  .col-md-offset-5 { margin-left: 41.6667%; }
  .col-md-offset-4 { margin-left: 33.3333%; }
  .col-md-offset-3 { margin-left: 25%; }
  .col-md-offset-2 { margin-left: 16.6667%; }
  .col-md-offset-1 { margin-left: 8.33333%; }
}

@media (min-width: 1200px) {
  .container { width: 1170px; }
  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11 { float: left; }
  .col-lg-12 { width: 100%; }
  .col-lg-11 { width: 91.6667%; }
  .col-lg-10 { width: 83.3333%; }
  .col-lg-9 { width: 75%; }
  .col-lg-8 { width: 66.6667%; }
  .col-lg-7 { width: 58.3333%; }
  .col-lg-6 { width: 50%; }
  .col-lg-5 { width: 41.6667%; }
  .col-lg-4 { width: 33.3333%; }
  .col-lg-3 { width: 25%; }
  .col-lg-2 { width: 16.6667%; }
  .col-lg-1 { width: 8.33333%; }
  .col-lg-pull-12 { right: 100%; }
  .col-lg-pull-11 { right: 91.6667%; }
  .col-lg-pull-10 { right: 83.3333%; }
  .col-lg-pull-9 { right: 75%; }
  .col-lg-pull-8 { right: 66.6667%; }
  .col-lg-pull-7 { right: 58.3333%; }
  .col-lg-pull-6 { right: 50%; }
  .col-lg-pull-5 { right: 41.6667%; }
  .col-lg-pull-4 { right: 33.3333%; }
  .col-lg-pull-3 { right: 25%; }
  .col-lg-pull-2 { right: 16.6667%; }
  .col-lg-pull-1 { right: 8.33333%; }
  .col-lg-push-12 { left: 100%; }
  .col-lg-push-11 { left: 91.6667%; }
  .col-lg-push-10 { left: 83.3333%; }
  .col-lg-push-9 { left: 75%; }
  .col-lg-push-8 { left: 66.6667%; }
  .col-lg-push-7 { left: 58.3333%; }
  .col-lg-push-6 { left: 50%; }
  .col-lg-push-5 { left: 41.6667%; }
  .col-lg-push-4 { left: 33.3333%; }
  .col-lg-push-3 { left: 25%; }
  .col-lg-push-2 { left: 16.6667%; }
  .col-lg-push-1 { left: 8.33333%; }
  .col-lg-offset-12 { margin-left: 100%; }
  .col-lg-offset-11 { margin-left: 91.6667%; }
  .col-lg-offset-10 { margin-left: 83.3333%; }
  .col-lg-offset-9 { margin-left: 75%; }
  .col-lg-offset-8 { margin-left: 66.6667%; }
  .col-lg-offset-7 { margin-left: 58.3333%; }
  .col-lg-offset-6 { margin-left: 50%; }
  .col-lg-offset-5 { margin-left: 41.6667%; }
  .col-lg-offset-4 { margin-left: 33.3333%; }
  .col-lg-offset-3 { margin-left: 25%; }
  .col-lg-offset-2 { margin-left: 16.6667%; }
  .col-lg-offset-1 { margin-left: 8.33333%; }
}

table { max-width: 100%; background-color: transparent; }

th { text-align: left; }

.table { width: 100%; margin-bottom: 20px; }

.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td { padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221); }

.table > thead > tr > th { vertical-align: bottom; border-bottom: 2px solid rgb(221, 221, 221); }

.table > caption + thead > tr:first-child > th, .table > colgroup + thead > tr:first-child > th, .table > thead:first-child > tr:first-child > th, .table > caption + thead > tr:first-child > td, .table > colgroup + thead > tr:first-child > td, .table > thead:first-child > tr:first-child > td { border-top: 0px; }

.table > tbody + tbody { border-top: 2px solid rgb(221, 221, 221); }

.table .table { background-color: rgb(247, 247, 247); }

.table-condensed > thead > tr > th, .table-condensed > tbody > tr > th, .table-condensed > tfoot > tr > th, .table-condensed > thead > tr > td, .table-condensed > tbody > tr > td, .table-condensed > tfoot > tr > td { padding: 5px; }

.table-bordered { border: 1px solid rgb(221, 221, 221); }

.table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td { border: 1px solid rgb(221, 221, 221); }

.table-bordered > thead > tr > th, .table-bordered > thead > tr > td { border-bottom-width: 2px; }

.table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th { background-color: rgb(249, 249, 249); }

.table-hover > tbody > tr:hover > td, .table-hover > tbody > tr:hover > th { background-color: rgb(245, 245, 245); }

table col[class*="col-"] { float: none; display: table-column; }

table td[class*="col-"], table th[class*="col-"] { float: none; display: table-cell; }

.table > thead > tr > td.active, .table > tbody > tr > td.active, .table > tfoot > tr > td.active, .table > thead > tr > th.active, .table > tbody > tr > th.active, .table > tfoot > tr > th.active, .table > thead > tr.active > td, .table > tbody > tr.active > td, .table > tfoot > tr.active > td, .table > thead > tr.active > th, .table > tbody > tr.active > th, .table > tfoot > tr.active > th { background-color: rgb(245, 245, 245); }

.table > thead > tr > td.success, .table > tbody > tr > td.success, .table > tfoot > tr > td.success, .table > thead > tr > th.success, .table > tbody > tr > th.success, .table > tfoot > tr > th.success, .table > thead > tr.success > td, .table > tbody > tr.success > td, .table > tfoot > tr.success > td, .table > thead > tr.success > th, .table > tbody > tr.success > th, .table > tfoot > tr.success > th { background-color: rgb(223, 240, 216); border-color: rgb(214, 233, 198); }

.table-hover > tbody > tr > td.success:hover, .table-hover > tbody > tr > th.success:hover, .table-hover > tbody > tr.success:hover > td, .table-hover > tbody > tr.success:hover > th { background-color: rgb(208, 233, 198); border-color: rgb(201, 226, 179); }

.table > thead > tr > td.danger, .table > tbody > tr > td.danger, .table > tfoot > tr > td.danger, .table > thead > tr > th.danger, .table > tbody > tr > th.danger, .table > tfoot > tr > th.danger, .table > thead > tr.danger > td, .table > tbody > tr.danger > td, .table > tfoot > tr.danger > td, .table > thead > tr.danger > th, .table > tbody > tr.danger > th, .table > tfoot > tr.danger > th { background-color: rgb(242, 222, 222); border-color: rgb(235, 204, 209); }

.table-hover > tbody > tr > td.danger:hover, .table-hover > tbody > tr > th.danger:hover, .table-hover > tbody > tr.danger:hover > td, .table-hover > tbody > tr.danger:hover > th { background-color: rgb(235, 204, 204); border-color: rgb(228, 185, 192); }

.table > thead > tr > td.warning, .table > tbody > tr > td.warning, .table > tfoot > tr > td.warning, .table > thead > tr > th.warning, .table > tbody > tr > th.warning, .table > tfoot > tr > th.warning, .table > thead > tr.warning > td, .table > tbody > tr.warning > td, .table > tfoot > tr.warning > td, .table > thead > tr.warning > th, .table > tbody > tr.warning > th, .table > tfoot > tr.warning > th { background-color: rgb(252, 248, 227); border-color: rgb(250, 235, 204); }

.table-hover > tbody > tr > td.warning:hover, .table-hover > tbody > tr > th.warning:hover, .table-hover > tbody > tr.warning:hover > td, .table-hover > tbody > tr.warning:hover > th { background-color: rgb(250, 242, 204); border-color: rgb(247, 225, 181); }

@media (max-width: 767px) {
  .table-responsive { width: 100%; margin-bottom: 15px; overflow: scroll hidden; border: 1px solid rgb(221, 221, 221); }
  .table-responsive > .table { margin-bottom: 0px; }
  .table-responsive > .table > thead > tr > th, .table-responsive > .table > tbody > tr > th, .table-responsive > .table > tfoot > tr > th, .table-responsive > .table > thead > tr > td, .table-responsive > .table > tbody > tr > td, .table-responsive > .table > tfoot > tr > td { white-space: nowrap; }
  .table-responsive > .table-bordered { border: 0px; }
  .table-responsive > .table-bordered > thead > tr > th:first-child, .table-responsive > .table-bordered > tbody > tr > th:first-child, .table-responsive > .table-bordered > tfoot > tr > th:first-child, .table-responsive > .table-bordered > thead > tr > td:first-child, .table-responsive > .table-bordered > tbody > tr > td:first-child, .table-responsive > .table-bordered > tfoot > tr > td:first-child { border-left: 0px; }
  .table-responsive > .table-bordered > thead > tr > th:last-child, .table-responsive > .table-bordered > tbody > tr > th:last-child, .table-responsive > .table-bordered > tfoot > tr > th:last-child, .table-responsive > .table-bordered > thead > tr > td:last-child, .table-responsive > .table-bordered > tbody > tr > td:last-child, .table-responsive > .table-bordered > tfoot > tr > td:last-child { border-right: 0px; }
  .table-responsive > .table-bordered > tbody > tr:last-child > th, .table-responsive > .table-bordered > tfoot > tr:last-child > th, .table-responsive > .table-bordered > tbody > tr:last-child > td, .table-responsive > .table-bordered > tfoot > tr:last-child > td { border-bottom: 0px; }
}

fieldset { padding: 0px; margin: 0px; border: 0px; }

legend { display: block; width: 100%; padding: 0px; margin-bottom: 20px; font-size: 21px; line-height: inherit; color: rgb(51, 51, 51); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-left-color: initial; border-image: initial; border-bottom-style: solid; border-bottom-color: rgb(229, 229, 229); }

label { display: inline-block; margin-bottom: 5px; font-weight: bold; }

input[type="search"] { box-sizing: border-box; }

input[type="radio"], input[type="checkbox"] { margin: 4px 0px 0px; line-height: normal; }

input[type="file"] { display: block; }

select[multiple], select[size] { height: auto; }

select optgroup { font-size: inherit; font-style: inherit; font-family: inherit; }

input[type="file"]:focus, input[type="radio"]:focus, input[type="checkbox"]:focus { outline: -webkit-focus-ring-color auto 5px; outline-offset: -2px; }

input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button { height: auto; }

output { display: block; padding-top: 7px; font-size: 14px; line-height: 1.42857; color: rgb(85, 85, 85); vertical-align: middle; }

.form-control::-webkit-input-placeholder { color: rgb(153, 153, 153); }

.form-control { display: block; width: 100%; height: 34px; padding: 6px 12px; font-size: 14px; line-height: 1.42857; color: rgb(85, 85, 85); vertical-align: middle; background-color: rgb(255, 255, 255); background-image: none; border: 1px solid rgb(204, 204, 204); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset; transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; }

.form-control:focus { border-color: rgb(102, 175, 233); outline: 0px; box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset, rgba(102, 175, 233, 0.6) 0px 0px 8px; }

.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control { cursor: not-allowed; background-color: rgb(238, 238, 238); }

textarea.form-control { height: auto; }

.form-group { margin-bottom: 15px; }

.radio, .checkbox { display: block; min-height: 20px; margin-top: 10px; margin-bottom: 10px; padding-left: 20px; vertical-align: middle; }

.radio label, .checkbox label { display: inline; margin-bottom: 0px; font-weight: normal; cursor: pointer; }

.radio input[type="radio"], .radio-inline input[type="radio"], .checkbox input[type="checkbox"], .checkbox-inline input[type="checkbox"] { float: left; margin-left: -20px; }

.radio + .radio, .checkbox + .checkbox { margin-top: -5px; }

.radio-inline, .checkbox-inline { display: inline-block; padding-left: 20px; margin-bottom: 0px; vertical-align: middle; font-weight: normal; cursor: pointer; }

.radio-inline + .radio-inline, .checkbox-inline + .checkbox-inline { margin-top: 0px; margin-left: 10px; }

input[type="radio"][disabled], input[type="checkbox"][disabled], .radio[disabled], .radio-inline[disabled], .checkbox[disabled], .checkbox-inline[disabled], fieldset[disabled] input[type="radio"], fieldset[disabled] input[type="checkbox"], fieldset[disabled] .radio, fieldset[disabled] .radio-inline, fieldset[disabled] .checkbox, fieldset[disabled] .checkbox-inline { cursor: not-allowed; }

.input-sm { height: 30px; padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; }

select.input-sm { height: 30px; line-height: 30px; }

textarea.input-sm { height: auto; }

.input-lg { height: 45px; padding: 10px 16px; font-size: 18px; line-height: 1.33; border-radius: 6px; }

select.input-lg { height: 45px; line-height: 45px; }

textarea.input-lg { height: auto; }

.has-warning .help-block, .has-warning .control-label { color: rgb(192, 152, 83); }

.has-warning .form-control { border-color: rgb(192, 152, 83); box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset; }

.has-warning .form-control:focus { border-color: rgb(164, 126, 60); box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset, rgb(219, 197, 158) 0px 0px 6px; }

.has-warning .input-group-addon { color: rgb(192, 152, 83); border-color: rgb(192, 152, 83); background-color: rgb(252, 248, 227); }

.has-error .help-block, .has-error .control-label { color: rgb(185, 74, 72); }

.has-error .form-control { border-color: rgb(185, 74, 72); box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset; }

.has-error .form-control:focus { border-color: rgb(149, 59, 57); box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset, rgb(213, 147, 146) 0px 0px 6px; }

.has-error .input-group-addon { color: rgb(185, 74, 72); border-color: rgb(185, 74, 72); background-color: rgb(242, 222, 222); }

.has-success .help-block, .has-success .control-label { color: rgb(70, 136, 71); }

.has-success .form-control { border-color: rgb(70, 136, 71); box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset; }

.has-success .form-control:focus { border-color: rgb(53, 102, 53); box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset, rgb(122, 186, 123) 0px 0px 6px; }

.has-success .input-group-addon { color: rgb(70, 136, 71); border-color: rgb(70, 136, 71); background-color: rgb(223, 240, 216); }

.form-control-static { margin-bottom: 0px; }

.help-block { display: block; margin-top: 5px; margin-bottom: 10px; color: rgb(115, 115, 115); }

@media (min-width: 768px) {
  .form-inline .form-group { display: inline-block; margin-bottom: 0px; vertical-align: middle; }
  .form-inline .form-control { display: inline-block; }
  .form-inline .radio, .form-inline .checkbox { display: inline-block; margin-top: 0px; margin-bottom: 0px; padding-left: 0px; }
  .form-inline .radio input[type="radio"], .form-inline .checkbox input[type="checkbox"] { float: none; margin-left: 0px; }
}

.form-horizontal .control-label, .form-horizontal .radio, .form-horizontal .checkbox, .form-horizontal .radio-inline, .form-horizontal .checkbox-inline { margin-top: 0px; margin-bottom: 0px; padding-top: 7px; }

.form-horizontal .form-group { margin-left: -15px; margin-right: -15px; }

.form-horizontal .form-group::before, .form-horizontal .form-group::after { content: " "; display: table; }

.form-horizontal .form-group::after { clear: both; }

.form-horizontal .form-group::before, .form-horizontal .form-group::after { content: " "; display: table; }

.form-horizontal .form-group::after { clear: both; }

.form-horizontal .form-control-static { padding-top: 7px; }

@media (min-width: 768px) {
  .form-horizontal .control-label { text-align: right; }
}

.btn { display: inline-block; margin-bottom: 0px; font-weight: normal; text-align: center; vertical-align: middle; cursor: pointer; background-image: none; border: 1px solid transparent; white-space: nowrap; padding: 6px 12px; font-size: 14px; line-height: 1.42857; border-radius: 4px; user-select: none; }

.btn:focus { outline: -webkit-focus-ring-color auto 5px; outline-offset: -2px; }

.btn:hover, .btn:focus { color: rgb(51, 51, 51); text-decoration: none; }

.btn:active, .btn.active { outline: 0px; background-image: none; box-shadow: rgba(0, 0, 0, 0.125) 0px 3px 5px inset; }

.btn.disabled, .btn[disabled], fieldset[disabled] .btn { cursor: not-allowed; pointer-events: none; opacity: 0.65; box-shadow: none; }

.btn-default { color: rgb(51, 51, 51); background-color: rgb(255, 255, 255); border-color: rgb(204, 204, 204); }

.btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default { color: rgb(51, 51, 51); background-color: rgb(235, 235, 235); border-color: rgb(173, 173, 173); }

.btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default { background-image: none; }

.btn-default.disabled, .btn-default[disabled], fieldset[disabled] .btn-default, .btn-default.disabled:hover, .btn-default[disabled]:hover, fieldset[disabled] .btn-default:hover, .btn-default.disabled:focus, .btn-default[disabled]:focus, fieldset[disabled] .btn-default:focus, .btn-default.disabled:active, .btn-default[disabled]:active, fieldset[disabled] .btn-default:active, .btn-default.disabled.active, .btn-default[disabled].active, fieldset[disabled] .btn-default.active { background-color: rgb(255, 255, 255); border-color: rgb(204, 204, 204); }

.btn-primary { color: rgb(255, 255, 255); background-color: rgb(66, 139, 202); border-color: rgb(53, 126, 189); }

.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary { color: rgb(255, 255, 255); background-color: rgb(50, 118, 177); border-color: rgb(40, 94, 142); }

.btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary { background-image: none; }

.btn-primary.disabled, .btn-primary[disabled], fieldset[disabled] .btn-primary, .btn-primary.disabled:hover, .btn-primary[disabled]:hover, fieldset[disabled] .btn-primary:hover, .btn-primary.disabled:focus, .btn-primary[disabled]:focus, fieldset[disabled] .btn-primary:focus, .btn-primary.disabled:active, .btn-primary[disabled]:active, fieldset[disabled] .btn-primary:active, .btn-primary.disabled.active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary.active { background-color: rgb(66, 139, 202); border-color: rgb(53, 126, 189); }

.btn-warning { color: rgb(255, 255, 255); background-color: rgb(240, 173, 78); border-color: rgb(238, 162, 54); }

.btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active, .open .dropdown-toggle.btn-warning { color: rgb(255, 255, 255); background-color: rgb(237, 156, 40); border-color: rgb(213, 133, 18); }

.btn-warning:active, .btn-warning.active, .open .dropdown-toggle.btn-warning { background-image: none; }

.btn-warning.disabled, .btn-warning[disabled], fieldset[disabled] .btn-warning, .btn-warning.disabled:hover, .btn-warning[disabled]:hover, fieldset[disabled] .btn-warning:hover, .btn-warning.disabled:focus, .btn-warning[disabled]:focus, fieldset[disabled] .btn-warning:focus, .btn-warning.disabled:active, .btn-warning[disabled]:active, fieldset[disabled] .btn-warning:active, .btn-warning.disabled.active, .btn-warning[disabled].active, fieldset[disabled] .btn-warning.active { background-color: rgb(240, 173, 78); border-color: rgb(238, 162, 54); }

.btn-danger { color: rgb(255, 255, 255); background-color: rgb(217, 83, 79); border-color: rgb(212, 63, 58); }

.btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .open .dropdown-toggle.btn-danger { color: rgb(255, 255, 255); background-color: rgb(210, 50, 45); border-color: rgb(172, 41, 37); }

.btn-danger:active, .btn-danger.active, .open .dropdown-toggle.btn-danger { background-image: none; }

.btn-danger.disabled, .btn-danger[disabled], fieldset[disabled] .btn-danger, .btn-danger.disabled:hover, .btn-danger[disabled]:hover, fieldset[disabled] .btn-danger:hover, .btn-danger.disabled:focus, .btn-danger[disabled]:focus, fieldset[disabled] .btn-danger:focus, .btn-danger.disabled:active, .btn-danger[disabled]:active, fieldset[disabled] .btn-danger:active, .btn-danger.disabled.active, .btn-danger[disabled].active, fieldset[disabled] .btn-danger.active { background-color: rgb(217, 83, 79); border-color: rgb(212, 63, 58); }

.btn-success { color: rgb(255, 255, 255); background-color: rgb(92, 184, 92); border-color: rgb(76, 174, 76); }

.btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active, .open .dropdown-toggle.btn-success { color: rgb(255, 255, 255); background-color: rgb(71, 164, 71); border-color: rgb(57, 132, 57); }

.btn-success:active, .btn-success.active, .open .dropdown-toggle.btn-success { background-image: none; }

.btn-success.disabled, .btn-success[disabled], fieldset[disabled] .btn-success, .btn-success.disabled:hover, .btn-success[disabled]:hover, fieldset[disabled] .btn-success:hover, .btn-success.disabled:focus, .btn-success[disabled]:focus, fieldset[disabled] .btn-success:focus, .btn-success.disabled:active, .btn-success[disabled]:active, fieldset[disabled] .btn-success:active, .btn-success.disabled.active, .btn-success[disabled].active, fieldset[disabled] .btn-success.active { background-color: rgb(92, 184, 92); border-color: rgb(76, 174, 76); }

.btn-info { color: rgb(255, 255, 255); background-color: rgb(91, 192, 222); border-color: rgb(70, 184, 218); }

.btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active, .open .dropdown-toggle.btn-info { color: rgb(255, 255, 255); background-color: rgb(57, 179, 215); border-color: rgb(38, 154, 188); }

.btn-info:active, .btn-info.active, .open .dropdown-toggle.btn-info { background-image: none; }

.btn-info.disabled, .btn-info[disabled], fieldset[disabled] .btn-info, .btn-info.disabled:hover, .btn-info[disabled]:hover, fieldset[disabled] .btn-info:hover, .btn-info.disabled:focus, .btn-info[disabled]:focus, fieldset[disabled] .btn-info:focus, .btn-info.disabled:active, .btn-info[disabled]:active, fieldset[disabled] .btn-info:active, .btn-info.disabled.active, .btn-info[disabled].active, fieldset[disabled] .btn-info.active { background-color: rgb(91, 192, 222); border-color: rgb(70, 184, 218); }

.btn-link { color: rgb(67, 117, 158); font-weight: normal; cursor: pointer; border-radius: 0px; }

.btn-link, .btn-link:active, .btn-link[disabled], fieldset[disabled] .btn-link { background-color: transparent; box-shadow: none; }

.btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active { border-color: transparent; }

.btn-link:hover, .btn-link:focus { color: rgb(44, 77, 104); text-decoration: underline; background-color: transparent; }

.btn-link[disabled]:hover, fieldset[disabled] .btn-link:hover, .btn-link[disabled]:focus, fieldset[disabled] .btn-link:focus { color: rgb(153, 153, 153); text-decoration: none; }

.btn-lg { padding: 10px 16px; font-size: 18px; line-height: 1.33; border-radius: 6px; }

.btn-sm, .btn-xs { padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; }

.btn-xs { padding: 1px 5px; }

.btn-block { display: block; width: 100%; padding-left: 0px; padding-right: 0px; }

.btn-block + .btn-block { margin-top: 5px; }

input[type="submit"].btn-block, input[type="reset"].btn-block, input[type="button"].btn-block { width: 100%; }

.fade { opacity: 0; transition: opacity 0.15s linear 0s; }

.fade.in { opacity: 1; }

.collapse { display: none; }

.collapse.in { display: block; }

.collapsing { position: relative; height: 0px; overflow: hidden; transition: height 0.35s ease 0s; }

@font-face { font-family: "Glyphicons Halflings"; src: url("../font/glyphicons-halflings-regular.eot?#iefix") format("embedded-opentype"), url("../font/glyphicons-halflings-regular.woff") format("woff"), url("../font/glyphicons-halflings-regular.ttf") format("truetype"), url("../font/glyphicons-halflings-regular.svg#glyphicons_halflingsregular") format("svg"); }

.glyphicon { position: relative; top: 1px; display: inline-block; font-family: "Glyphicons Halflings"; font-style: normal; font-weight: normal; line-height: 1; -webkit-font-smoothing: antialiased; }

.glyphicon:empty { width: 1em; }

.glyphicon-asterisk::before { content: "*"; }

.glyphicon-plus::before { content: "+"; }

.glyphicon-euro::before { content: "€"; }

.glyphicon-minus::before { content: "−"; }

.glyphicon-cloud::before { content: "☁"; }

.glyphicon-envelope::before { content: "✉"; }

.glyphicon-pencil::before { content: "✏"; }

.glyphicon-glass::before { content: ""; }

.glyphicon-music::before { content: ""; }

.glyphicon-search::before { content: ""; }

.glyphicon-heart::before { content: ""; }

.glyphicon-star::before { content: ""; }

.glyphicon-star-empty::before { content: ""; }

.glyphicon-user::before { content: ""; }

.glyphicon-film::before { content: ""; }

.glyphicon-th-large::before { content: ""; }

.glyphicon-th::before { content: ""; }

.glyphicon-th-list::before { content: ""; }

.glyphicon-ok::before { content: ""; }

.glyphicon-remove::before { content: ""; }

.glyphicon-zoom-in::before { content: ""; }

.glyphicon-zoom-out::before { content: ""; }

.glyphicon-off::before { content: ""; }

.glyphicon-signal::before { content: ""; }

.glyphicon-cog::before { content: ""; }

.glyphicon-trash::before { content: ""; }

.glyphicon-home::before { content: ""; }

.glyphicon-file::before { content: ""; }

.glyphicon-time::before { content: ""; }

.glyphicon-road::before { content: ""; }

.glyphicon-download-alt::before { content: ""; }

.glyphicon-download::before { content: ""; }

.glyphicon-upload::before { content: ""; }

.glyphicon-inbox::before { content: ""; }

.glyphicon-play-circle::before { content: ""; }

.glyphicon-repeat::before { content: ""; }

.glyphicon-refresh::before { content: ""; }

.glyphicon-list-alt::before { content: ""; }

.glyphicon-lock::before { content: ""; }

.glyphicon-flag::before { content: ""; }

.glyphicon-headphones::before { content: ""; }

.glyphicon-volume-off::before { content: ""; }

.glyphicon-volume-down::before { content: ""; }

.glyphicon-volume-up::before { content: ""; }

.glyphicon-qrcode::before { content: ""; }

.glyphicon-barcode::before { content: ""; }

.glyphicon-tag::before { content: ""; }

.glyphicon-tags::before { content: ""; }

.glyphicon-book::before { content: ""; }

.glyphicon-bookmark::before { content: ""; }

.glyphicon-print::before { content: ""; }

.glyphicon-camera::before { content: ""; }

.glyphicon-font::before { content: ""; }

.glyphicon-bold::before { content: ""; }

.glyphicon-italic::before { content: ""; }

.glyphicon-text-height::before { content: ""; }

.glyphicon-text-width::before { content: ""; }

.glyphicon-align-left::before { content: ""; }

.glyphicon-align-center::before { content: ""; }

.glyphicon-align-right::before { content: ""; }

.glyphicon-align-justify::before { content: ""; }

.glyphicon-list::before { content: ""; }

.glyphicon-indent-left::before { content: ""; }

.glyphicon-indent-right::before { content: ""; }

.glyphicon-facetime-video::before { content: ""; }

.glyphicon-picture::before { content: ""; }

.glyphicon-map-marker::before { content: ""; }

.glyphicon-adjust::before { content: ""; }

.glyphicon-tint::before { content: ""; }

.glyphicon-edit::before { content: ""; }

.glyphicon-share::before { content: ""; }

.glyphicon-check::before { content: ""; }

.glyphicon-move::before { content: ""; }

.glyphicon-step-backward::before { content: ""; }

.glyphicon-fast-backward::before { content: ""; }

.glyphicon-backward::before { content: ""; }

.glyphicon-play::before { content: ""; }

.glyphicon-pause::before { content: ""; }

.glyphicon-stop::before { content: ""; }

.glyphicon-forward::before { content: ""; }

.glyphicon-fast-forward::before { content: ""; }

.glyphicon-step-forward::before { content: ""; }

.glyphicon-eject::before { content: ""; }

.glyphicon-chevron-left::before { content: ""; }

.glyphicon-chevron-right::before { content: ""; }

.glyphicon-plus-sign::before { content: ""; }

.glyphicon-minus-sign::before { content: ""; }

.glyphicon-remove-sign::before { content: ""; }

.glyphicon-ok-sign::before { content: ""; }

.glyphicon-question-sign::before { content: ""; }

.glyphicon-info-sign::before { content: ""; }

.glyphicon-screenshot::before { content: ""; }

.glyphicon-remove-circle::before { content: ""; }

.glyphicon-ok-circle::before { content: ""; }

.glyphicon-ban-circle::before { content: ""; }

.glyphicon-arrow-left::before { content: ""; }

.glyphicon-arrow-right::before { content: ""; }

.glyphicon-arrow-up::before { content: ""; }

.glyphicon-arrow-down::before { content: ""; }

.glyphicon-share-alt::before { content: ""; }

.glyphicon-resize-full::before { content: ""; }

.glyphicon-resize-small::before { content: ""; }

.glyphicon-exclamation-sign::before { content: ""; }

.glyphicon-gift::before { content: ""; }

.glyphicon-leaf::before { content: ""; }

.glyphicon-fire::before { content: ""; }

.glyphicon-eye-open::before { content: ""; }

.glyphicon-eye-close::before { content: ""; }

.glyphicon-warning-sign::before { content: ""; }

.glyphicon-plane::before { content: ""; }

.glyphicon-calendar::before { content: ""; }

.glyphicon-random::before { content: ""; }

.glyphicon-comment::before { content: ""; }

.glyphicon-magnet::before { content: ""; }

.glyphicon-chevron-up::before { content: ""; }

.glyphicon-chevron-down::before { content: ""; }

.glyphicon-retweet::before { content: ""; }

.glyphicon-shopping-cart::before { content: ""; }

.glyphicon-folder-close::before { content: ""; }

.glyphicon-folder-open::before { content: ""; }

.glyphicon-resize-vertical::before { content: ""; }

.glyphicon-resize-horizontal::before { content: ""; }

.glyphicon-hdd::before { content: ""; }

.glyphicon-bullhorn::before { content: ""; }

.glyphicon-bell::before { content: ""; }

.glyphicon-certificate::before { content: ""; }

.glyphicon-thumbs-up::before { content: ""; }

.glyphicon-thumbs-down::before { content: ""; }

.glyphicon-hand-right::before { content: ""; }

.glyphicon-hand-left::before { content: ""; }

.glyphicon-hand-up::before { content: ""; }

.glyphicon-hand-down::before { content: ""; }

.glyphicon-circle-arrow-right::before { content: ""; }

.glyphicon-circle-arrow-left::before { content: ""; }

.glyphicon-circle-arrow-up::before { content: ""; }

.glyphicon-circle-arrow-down::before { content: ""; }

.glyphicon-globe::before { content: ""; }

.glyphicon-wrench::before { content: ""; }

.glyphicon-tasks::before { content: ""; }

.glyphicon-filter::before { content: ""; }

.glyphicon-briefcase::before { content: ""; }

.glyphicon-fullscreen::before { content: ""; }

.glyphicon-dashboard::before { content: ""; }

.glyphicon-paperclip::before { content: ""; }

.glyphicon-heart-empty::before { content: ""; }

.glyphicon-link::before { content: ""; }

.glyphicon-phone::before { content: ""; }

.glyphicon-pushpin::before { content: ""; }

.glyphicon-usd::before { content: ""; }

.glyphicon-gbp::before { content: ""; }

.glyphicon-sort::before { content: ""; }

.glyphicon-sort-by-alphabet::before { content: ""; }

.glyphicon-sort-by-alphabet-alt::before { content: ""; }

.glyphicon-sort-by-order::before { content: ""; }

.glyphicon-sort-by-order-alt::before { content: ""; }

.glyphicon-sort-by-attributes::before { content: ""; }

.glyphicon-sort-by-attributes-alt::before { content: ""; }

.glyphicon-unchecked::before { content: ""; }

.glyphicon-expand::before { content: ""; }

.glyphicon-collapse-down::before { content: ""; }

.glyphicon-collapse-up::before { content: ""; }

.glyphicon-log-in::before { content: ""; }

.glyphicon-flash::before { content: ""; }

.glyphicon-log-out::before { content: ""; }

.glyphicon-new-window::before { content: ""; }

.glyphicon-record::before { content: ""; }

.glyphicon-save::before { content: ""; }

.glyphicon-open::before { content: ""; }

.glyphicon-saved::before { content: ""; }

.glyphicon-import::before { content: ""; }

.glyphicon-export::before { content: ""; }

.glyphicon-send::before { content: ""; }

.glyphicon-floppy-disk::before { content: ""; }

.glyphicon-floppy-saved::before { content: ""; }

.glyphicon-floppy-remove::before { content: ""; }

.glyphicon-floppy-save::before { content: ""; }

.glyphicon-floppy-open::before { content: ""; }

.glyphicon-credit-card::before { content: ""; }

.glyphicon-transfer::before { content: ""; }

.glyphicon-cutlery::before { content: ""; }

.glyphicon-header::before { content: ""; }

.glyphicon-compressed::before { content: ""; }

.glyphicon-earphone::before { content: ""; }

.glyphicon-phone-alt::before { content: ""; }

.glyphicon-tower::before { content: ""; }

.glyphicon-stats::before { content: ""; }

.glyphicon-sd-video::before { content: ""; }

.glyphicon-hd-video::before { content: ""; }

.glyphicon-subtitles::before { content: ""; }

.glyphicon-sound-stereo::before { content: ""; }

.glyphicon-sound-dolby::before { content: ""; }

.glyphicon-sound-5-1::before { content: ""; }

.glyphicon-sound-6-1::before { content: ""; }

.glyphicon-sound-7-1::before { content: ""; }

.glyphicon-copyright-mark::before { content: ""; }

.glyphicon-registration-mark::before { content: ""; }

.glyphicon-cloud-download::before { content: ""; }

.glyphicon-cloud-upload::before { content: ""; }

.glyphicon-tree-conifer::before { content: ""; }

.glyphicon-tree-deciduous::before { content: ""; }

.caret { display: inline-block; width: 0px; height: 0px; margin-left: 2px; vertical-align: middle; border-width: 4px 4px 0px; border-style: solid solid dotted; border-top-color: rgb(0, 0, 0); border-right-color: transparent; border-left-color: transparent; border-bottom-color: initial; }

.dropdown { position: relative; }

.dropdown-toggle:focus { outline: 0px; }

.dropdown-menu { position: absolute; top: 100%; left: 0px; z-index: 1000; display: none; float: left; min-width: 160px; padding: 5px 0px; margin: 2px 0px 0px; list-style: none; font-size: 14px; background-color: rgb(255, 255, 255); border: 1px solid rgba(0, 0, 0, 0.15); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.176) 0px 6px 12px; background-clip: padding-box; }

.dropdown-menu.pull-right { right: 0px; left: auto; }

.dropdown-menu .divider { height: 1px; margin: 9px 0px; overflow: hidden; background-color: rgb(229, 229, 229); }

.dropdown-menu > li > a { display: block; padding: 3px 20px; clear: both; font-weight: normal; line-height: 1.42857; color: rgb(51, 51, 51); white-space: nowrap; }

.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus { text-decoration: none; color: rgb(38, 38, 38); background-color: rgb(245, 245, 245); }

.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus { color: rgb(255, 255, 255); text-decoration: none; outline: 0px; background-color: rgb(66, 139, 202); }

.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus { color: rgb(153, 153, 153); }

.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus { text-decoration: none; background-color: transparent; background-image: none; cursor: not-allowed; }

.open > .dropdown-menu { display: block; }

.open > a { outline: 0px; }

.dropdown-header { display: block; padding: 3px 20px; font-size: 12px; line-height: 1.42857; color: rgb(153, 153, 153); }

.dropdown-backdrop { position: fixed; inset: 0px; z-index: 990; }

.pull-right > .dropdown-menu { right: 0px; left: auto; }

.dropup .caret, .navbar-fixed-bottom .dropdown .caret { border-top: 0px dotted; border-bottom: 4px solid rgb(0, 0, 0); content: ""; }

.dropup .dropdown-menu, .navbar-fixed-bottom .dropdown .dropdown-menu { top: auto; bottom: 100%; margin-bottom: 1px; }

@media (min-width: 768px) {
  .navbar-right .dropdown-menu { right: 0px; left: auto; }
}

.btn-default .caret { border-top-color: rgb(51, 51, 51); }

.btn-primary .caret, .btn-success .caret, .btn-warning .caret, .btn-danger .caret, .btn-info .caret { border-top-color: rgb(255, 255, 255); }

.dropup .btn-default .caret { border-bottom-color: rgb(51, 51, 51); }

.dropup .btn-primary .caret, .dropup .btn-success .caret, .dropup .btn-warning .caret, .dropup .btn-danger .caret, .dropup .btn-info .caret { border-bottom-color: rgb(255, 255, 255); }

.btn-group, .btn-group-vertical { position: relative; display: inline-block; vertical-align: middle; }

.btn-group > .btn, .btn-group-vertical > .btn { position: relative; float: left; }

.btn-group > .btn:hover, .btn-group-vertical > .btn:hover, .btn-group > .btn:focus, .btn-group-vertical > .btn:focus, .btn-group > .btn:active, .btn-group-vertical > .btn:active, .btn-group > .btn.active, .btn-group-vertical > .btn.active { z-index: 2; }

.btn-group > .btn:focus, .btn-group-vertical > .btn:focus { outline: none; }

.btn-group .btn + .btn, .btn-group .btn + .btn-group, .btn-group .btn-group + .btn, .btn-group .btn-group + .btn-group { margin-left: -1px; }

.btn-toolbar::before, .btn-toolbar::after { content: " "; display: table; }

.btn-toolbar::after { clear: both; }

.btn-toolbar::before, .btn-toolbar::after { content: " "; display: table; }

.btn-toolbar::after { clear: both; }

.btn-toolbar .btn-group { float: left; }

.btn-toolbar > .btn + .btn, .btn-toolbar > .btn-group + .btn, .btn-toolbar > .btn + .btn-group, .btn-toolbar > .btn-group + .btn-group { margin-left: 5px; }

.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) { border-radius: 0px; }

.btn-group > .btn:first-child { margin-left: 0px; }

.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) { border-bottom-right-radius: 0px; border-top-right-radius: 0px; }

.btn-group > .btn:last-child:not(:first-child), .btn-group > .dropdown-toggle:not(:first-child) { border-bottom-left-radius: 0px; border-top-left-radius: 0px; }

.btn-group > .btn-group { float: left; }

.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn { border-radius: 0px; }

.btn-group > .btn-group:first-child > .btn:last-child, .btn-group > .btn-group:first-child > .dropdown-toggle { border-bottom-right-radius: 0px; border-top-right-radius: 0px; }

.btn-group > .btn-group:last-child > .btn:first-child { border-bottom-left-radius: 0px; border-top-left-radius: 0px; }

.btn-group .dropdown-toggle:active, .btn-group.open .dropdown-toggle { outline: 0px; }

.btn-group-xs > .btn { font-size: 12px; line-height: 1.5; border-radius: 3px; padding: 1px 5px; }

.btn-group-sm > .btn { padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; }

.btn-group-lg > .btn { padding: 10px 16px; font-size: 18px; line-height: 1.33; border-radius: 6px; }

.btn-group > .btn + .dropdown-toggle { padding-left: 8px; padding-right: 8px; }

.btn-group > .btn-lg + .dropdown-toggle { padding-left: 12px; padding-right: 12px; }

.btn-group.open .dropdown-toggle { box-shadow: rgba(0, 0, 0, 0.125) 0px 3px 5px inset; }

.btn .caret { margin-left: 0px; }

.btn-lg .caret { border-width: 5px 5px 0px; }

.dropup .btn-lg .caret { border-width: 0px 5px 5px; }

.btn-group-vertical > .btn, .btn-group-vertical > .btn-group { display: block; float: none; width: 100%; max-width: 100%; }

.btn-group-vertical > .btn-group::before, .btn-group-vertical > .btn-group::after { content: " "; display: table; }

.btn-group-vertical > .btn-group::after { clear: both; }

.btn-group-vertical > .btn-group::before, .btn-group-vertical > .btn-group::after { content: " "; display: table; }

.btn-group-vertical > .btn-group::after { clear: both; }

.btn-group-vertical > .btn-group > .btn { float: none; }

.btn-group-vertical > .btn + .btn, .btn-group-vertical > .btn + .btn-group, .btn-group-vertical > .btn-group + .btn, .btn-group-vertical > .btn-group + .btn-group { margin-top: -1px; margin-left: 0px; }

.btn-group-vertical > .btn:not(:first-child):not(:last-child) { border-radius: 0px; }

.btn-group-vertical > .btn:first-child:not(:last-child) { border-top-right-radius: 4px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; }

.btn-group-vertical > .btn:last-child:not(:first-child) { border-bottom-left-radius: 4px; border-top-right-radius: 0px; border-top-left-radius: 0px; }

.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn { border-radius: 0px; }

.btn-group-vertical > .btn-group:first-child > .btn:last-child, .btn-group-vertical > .btn-group:first-child > .dropdown-toggle { border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; }

.btn-group-vertical > .btn-group:last-child > .btn:first-child { border-top-right-radius: 0px; border-top-left-radius: 0px; }

.btn-group-justified { display: table; width: 100%; table-layout: fixed; border-collapse: separate; }

.btn-group-justified .btn { float: none; display: table-cell; width: 1%; }

[data-toggle="buttons"] > .btn > input[type="radio"], [data-toggle="buttons"] > .btn > input[type="checkbox"] { display: none; }

.input-group { position: relative; display: table; border-collapse: separate; }

.input-group.col { float: none; padding-left: 0px; padding-right: 0px; }

.input-group .form-control { width: 100%; margin-bottom: 0px; }

.input-group-lg > .form-control, .input-group-lg > .input-group-addon, .input-group-lg > .input-group-btn > .btn { height: 45px; padding: 10px 16px; font-size: 18px; line-height: 1.33; border-radius: 6px; }

select.input-group-lg > .form-control, select.input-group-lg > .input-group-addon, select.input-group-lg > .input-group-btn > .btn { height: 45px; line-height: 45px; }

textarea.input-group-lg > .form-control, textarea.input-group-lg > .input-group-addon, textarea.input-group-lg > .input-group-btn > .btn { height: auto; }

.input-group-sm > .form-control, .input-group-sm > .input-group-addon, .input-group-sm > .input-group-btn > .btn { height: 30px; padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; }

select.input-group-sm > .form-control, select.input-group-sm > .input-group-addon, select.input-group-sm > .input-group-btn > .btn { height: 30px; line-height: 30px; }

textarea.input-group-sm > .form-control, textarea.input-group-sm > .input-group-addon, textarea.input-group-sm > .input-group-btn > .btn { height: auto; }

.input-group-addon, .input-group-btn, .input-group .form-control { display: table-cell; }

.input-group-addon:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child), .input-group .form-control:not(:first-child):not(:last-child) { border-radius: 0px; }

.input-group-addon, .input-group-btn { width: 1%; white-space: nowrap; vertical-align: middle; }

.input-group-addon { padding: 6px 12px; font-size: 14px; font-weight: normal; line-height: 1; color: rgb(85, 85, 85); text-align: center; background-color: rgb(238, 238, 238); border: 1px solid rgb(204, 204, 204); border-radius: 4px; }

.input-group-addon.input-sm { padding: 5px 10px; font-size: 12px; border-radius: 3px; }

.input-group-addon.input-lg { padding: 10px 16px; font-size: 18px; border-radius: 6px; }

.input-group-addon input[type="radio"], .input-group-addon input[type="checkbox"] { margin-top: 0px; }

.input-group .form-control:first-child, .input-group-addon:first-child, .input-group-btn:first-child > .btn, .input-group-btn:first-child > .dropdown-toggle, .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) { border-bottom-right-radius: 0px; border-top-right-radius: 0px; }

.input-group-addon:first-child { border-right: 0px; }

.input-group .form-control:last-child, .input-group-addon:last-child, .input-group-btn:last-child > .btn, .input-group-btn:last-child > .dropdown-toggle, .input-group-btn:first-child > .btn:not(:first-child) { border-bottom-left-radius: 0px; border-top-left-radius: 0px; }

.input-group-addon:last-child { border-left: 0px; }

.input-group-btn { position: relative; white-space: nowrap; }

.input-group-btn:first-child > .btn { margin-right: -1px; }

.input-group-btn:last-child > .btn { margin-left: -1px; }

.input-group-btn > .btn { position: relative; }

.input-group-btn > .btn + .btn { margin-left: -4px; }

.input-group-btn > .btn:hover, .input-group-btn > .btn:active { z-index: 2; }

.nav { margin-bottom: 0px; padding-left: 0px; list-style: none; }

.nav::before, .nav::after { content: " "; display: table; }

.nav::after { clear: both; }

.nav::before, .nav::after { content: " "; display: table; }

.nav::after { clear: both; }

.nav > li { position: relative; display: block; }

.nav > li > a, .docs-nav .navbar-nav > li > span { position: relative; display: block; padding: 10px 15px; }

.nav > li > a:hover, .nav > li > a:focus { text-decoration: none; background-color: rgb(238, 238, 238); }

.nav > li.disabled > a { color: rgb(153, 153, 153); }

.nav > li.disabled > a:hover, .nav > li.disabled > a:focus { color: rgb(153, 153, 153); text-decoration: none; background-color: transparent; cursor: not-allowed; }

.nav .open > a, .nav .open > a:hover, .nav .open > a:focus { background-color: rgb(238, 238, 238); border-color: rgb(67, 117, 158); }

.nav .open > a .caret, .nav .open > a:hover .caret, .nav .open > a:focus .caret { border-top-color: rgb(44, 77, 104); border-bottom-color: rgb(44, 77, 104); }

.nav .nav-divider { height: 1px; margin: 9px 0px; overflow: hidden; background-color: rgb(229, 229, 229); }

.nav > li > a > img { max-width: none; }

.nav-tabs { border-bottom: 1px solid rgb(221, 221, 221); }

.nav-tabs > li { float: left; margin-bottom: -1px; }

.nav-tabs > li > a { margin-right: 2px; line-height: 1.42857; border: 1px solid transparent; border-radius: 4px 4px 0px 0px; }

.nav-tabs > li > a:hover { border-color: rgb(238, 238, 238) rgb(238, 238, 238) rgb(221, 221, 221); }

.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus { color: rgb(85, 85, 85); background-color: rgb(247, 247, 247); border-width: 1px; border-style: solid; border-color: rgb(221, 221, 221) rgb(221, 221, 221) transparent; border-image: initial; cursor: default; }

.nav-tabs.nav-justified { width: 100%; border-bottom: 0px; }

.nav-tabs.nav-justified > li { float: none; }

.nav-tabs.nav-justified > li > a { text-align: center; margin-bottom: 5px; }

@media (min-width: 768px) {
  .nav-tabs.nav-justified > li { display: table-cell; width: 1%; }
  .nav-tabs.nav-justified > li > a { margin-bottom: 0px; }
}

.nav-tabs.nav-justified > li > a { margin-right: 0px; border-radius: 4px; }

.nav-tabs.nav-justified > .active > a, .nav-tabs.nav-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:focus { border: 1px solid rgb(221, 221, 221); }

@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a { border-bottom: 1px solid rgb(221, 221, 221); border-radius: 4px 4px 0px 0px; }
  .nav-tabs.nav-justified > .active > a, .nav-tabs.nav-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:focus { border-bottom-color: rgb(247, 247, 247); }
}

.nav-pills > li { float: left; }

.nav-pills > li > a { border-radius: 4px; }

.nav-pills > li + li { margin-left: 2px; }

.nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus { color: rgb(255, 255, 255); background-color: rgb(66, 139, 202); }

.nav-pills > li.active > a .caret, .nav-pills > li.active > a:hover .caret, .nav-pills > li.active > a:focus .caret { border-top-color: rgb(255, 255, 255); border-bottom-color: rgb(255, 255, 255); }

.nav-stacked > li { float: none; }

.nav-stacked > li + li { margin-top: 2px; margin-left: 0px; }

.nav-justified { width: 100%; }

.nav-justified > li { float: none; }

.nav-justified > li > a { text-align: center; margin-bottom: 5px; }

@media (min-width: 768px) {
  .nav-justified > li { display: table-cell; width: 1%; }
  .nav-justified > li > a { margin-bottom: 0px; }
}

.nav-tabs-justified { border-bottom: 0px; }

.nav-tabs-justified > li > a { margin-right: 0px; border-radius: 4px; }

.nav-tabs-justified > .active > a, .nav-tabs-justified > .active > a:hover, .nav-tabs-justified > .active > a:focus { border: 1px solid rgb(221, 221, 221); }

@media (min-width: 768px) {
  .nav-tabs-justified > li > a { border-bottom: 1px solid rgb(221, 221, 221); border-radius: 4px 4px 0px 0px; }
  .nav-tabs-justified > .active > a, .nav-tabs-justified > .active > a:hover, .nav-tabs-justified > .active > a:focus { border-bottom-color: rgb(247, 247, 247); }
}

.tab-content > .tab-pane { display: none; }

.tab-content > .active { display: block; }

.nav .caret { border-top-color: rgb(67, 117, 158); border-bottom-color: rgb(67, 117, 158); }

.nav a:hover .caret { border-top-color: rgb(44, 77, 104); border-bottom-color: rgb(44, 77, 104); }

.nav-tabs .dropdown-menu { margin-top: -1px; border-top-right-radius: 0px; border-top-left-radius: 0px; }

.navbar { position: relative; z-index: 1000; min-height: 60px; margin-bottom: 20px; border: 1px solid transparent; }

.navbar::before, .navbar::after { content: " "; display: table; }

.navbar::after { clear: both; }

.navbar::before, .navbar::after { content: " "; display: table; }

.navbar::after { clear: both; }

@media (min-width: 768px) {
  .navbar { border-radius: 4px; }
}

.navbar-header::before, .navbar-header::after { content: " "; display: table; }

.navbar-header::after { clear: both; }

.navbar-header::before, .navbar-header::after { content: " "; display: table; }

.navbar-header::after { clear: both; }

@media (min-width: 768px) {
  .navbar-header { float: left; }
}

.navbar-collapse { max-height: 340px; overflow-x: visible; padding-right: 15px; padding-left: 15px; border-top: 1px solid transparent; box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px inset; }

.navbar-collapse::before, .navbar-collapse::after { content: " "; display: table; }

.navbar-collapse::after { clear: both; }

.navbar-collapse::before, .navbar-collapse::after { content: " "; display: table; }

.navbar-collapse::after { clear: both; }

.navbar-collapse.in { overflow-y: auto; }

@media (min-width: 768px) {
  .navbar-collapse { width: auto; border-top: 0px; box-shadow: none; }
  .navbar-collapse.collapse { padding-bottom: 0px; display: block !important; height: auto !important; overflow: visible !important; }
  .navbar-collapse.in { overflow-y: visible; }
  .navbar-collapse .navbar-nav.navbar-left:first-child { margin-left: -15px; }
  .navbar-collapse .navbar-nav.navbar-right:last-child { margin-right: -15px; }
  .navbar-collapse .navbar-text:last-child { margin-right: 0px; }
}

.container > .navbar-header, .container > .navbar-collapse { margin-right: -15px; margin-left: -15px; }

@media (min-width: 768px) {
  .container > .navbar-header, .container > .navbar-collapse { margin-right: 0px; margin-left: 0px; }
}

.navbar-static-top { border-width: 0px 0px 1px; }

@media (min-width: 768px) {
  .navbar-static-top { border-radius: 0px; }
}

.navbar-fixed-top, .navbar-fixed-bottom { position: fixed; right: 0px; left: 0px; border-width: 0px 0px 1px; }

@media (min-width: 768px) {
  .navbar-fixed-top, .navbar-fixed-bottom { border-radius: 0px; }
}

.navbar-fixed-top { z-index: 1030; top: 0px; }

.navbar-fixed-bottom { bottom: 0px; margin-bottom: 0px; }

.navbar-brand { float: left; padding: 20px 15px; font-size: 18px; line-height: 20px; }

.navbar-brand:hover, .navbar-brand:focus { text-decoration: none; }

@media (min-width: 768px) {
  .navbar > .container .navbar-brand { margin-left: -15px; }
}

.navbar-toggle { position: relative; float: right; margin-right: 15px; padding: 9px 10px; margin-top: 13px; margin-bottom: 13px; background-color: transparent; border: 1px solid transparent; border-radius: 4px; }

.navbar-toggle .icon-bar { display: block; width: 22px; height: 2px; border-radius: 1px; }

.navbar-toggle .icon-bar + .icon-bar { margin-top: 4px; }

@media (min-width: 768px) {
  .navbar-toggle { display: none; }
}

.navbar-nav { margin: 10px -15px; }

.navbar-nav > li > a, .docs-nav .navbar-nav > li > span { padding-top: 10px; padding-bottom: 10px; line-height: 20px; }

@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu { position: static; float: none; width: auto; margin-top: 0px; background-color: transparent; border: 0px; box-shadow: none; }
  .navbar-nav .open .dropdown-menu > li > a, .navbar-nav .open .dropdown-menu .dropdown-header { padding: 5px 15px 5px 25px; }
  .navbar-nav .open .dropdown-menu > li > a { line-height: 20px; }
  .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus { background-image: none; }
}

@media (min-width: 768px) {
  .navbar-nav { float: left; margin: 0px; }
  .navbar-nav > li { float: left; }
  .navbar-nav > li > a, .docs-nav .navbar-nav > li > span { padding-top: 20px; padding-bottom: 20px; }
}

@media (min-width: 768px) {
  .navbar-left { float: left !important; }
  .navbar-right { float: right !important; }
}

.navbar-form { margin: 13px -15px; padding: 10px 15px; border-top: 1px solid transparent; border-bottom: 1px solid transparent; box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px inset, rgba(255, 255, 255, 0.1) 0px 1px 0px; }

@media (min-width: 768px) {
  .navbar-form .form-group { display: inline-block; margin-bottom: 0px; vertical-align: middle; }
  .navbar-form .form-control { display: inline-block; }
  .navbar-form .radio, .navbar-form .checkbox { display: inline-block; margin-top: 0px; margin-bottom: 0px; padding-left: 0px; }
  .navbar-form .radio input[type="radio"], .navbar-form .checkbox input[type="checkbox"] { float: none; margin-left: 0px; }
}

@media (max-width: 767px) {
  .navbar-form .form-group { margin-bottom: 5px; }
}

@media (min-width: 768px) {
  .navbar-form { width: auto; border: 0px; margin-left: 0px; margin-right: 0px; padding-top: 0px; padding-bottom: 0px; box-shadow: none; }
}

.navbar-nav > li > .dropdown-menu { margin-top: 0px; border-top-right-radius: 0px; border-top-left-radius: 0px; }

.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu { border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; }

.navbar-nav.pull-right > li > .dropdown-menu, .navbar-nav > li > .dropdown-menu.pull-right { left: auto; right: 0px; }

.navbar-btn { margin-top: 13px; margin-bottom: 13px; }

.navbar-text { float: left; margin-top: 20px; margin-bottom: 20px; }

@media (min-width: 768px) {
  .navbar-text { margin-left: 15px; margin-right: 15px; }
}

.navbar-default { background-color: rgb(248, 248, 248); border-color: rgb(231, 231, 231); }

.navbar-default .navbar-brand { color: rgb(119, 119, 119); }

.navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus { color: rgb(94, 94, 94); background-color: transparent; }

.navbar-default .navbar-text { color: rgb(119, 119, 119); }

.navbar-default .navbar-nav > li > a { color: rgb(119, 119, 119); }

.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus { color: rgb(51, 51, 51); background-color: transparent; }

.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus { color: rgb(85, 85, 85); background-color: rgb(231, 231, 231); }

.navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus { color: rgb(204, 204, 204); background-color: transparent; }

.navbar-default .navbar-toggle { border-color: rgb(221, 221, 221); }

.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus { background-color: rgb(221, 221, 221); }

.navbar-default .navbar-toggle .icon-bar { background-color: rgb(204, 204, 204); }

.navbar-default .navbar-collapse, .navbar-default .navbar-form { border-color: rgb(231, 231, 231); }

.navbar-default .navbar-nav > .dropdown > a:hover .caret, .navbar-default .navbar-nav > .dropdown > a:focus .caret { border-top-color: rgb(51, 51, 51); border-bottom-color: rgb(51, 51, 51); }

.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus { background-color: rgb(231, 231, 231); color: rgb(85, 85, 85); }

.navbar-default .navbar-nav > .open > a .caret, .navbar-default .navbar-nav > .open > a:hover .caret, .navbar-default .navbar-nav > .open > a:focus .caret { border-top-color: rgb(85, 85, 85); border-bottom-color: rgb(85, 85, 85); }

.navbar-default .navbar-nav > .dropdown > a .caret { border-top-color: rgb(119, 119, 119); border-bottom-color: rgb(119, 119, 119); }

@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a { color: rgb(119, 119, 119); }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus { color: rgb(51, 51, 51); background-color: transparent; }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus { color: rgb(85, 85, 85); background-color: rgb(231, 231, 231); }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus { color: rgb(204, 204, 204); background-color: transparent; }
}

.navbar-default .navbar-link { color: rgb(119, 119, 119); }

.navbar-default .navbar-link:hover { color: rgb(51, 51, 51); }

.navbar-inverse { background-color: rgb(29, 54, 93); border-color: rgb(17, 31, 54); }

.navbar-inverse .navbar-brand { color: rgb(185, 200, 224); }

.navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus { color: rgb(255, 255, 255); background-color: transparent; }

.navbar-inverse .navbar-text { color: rgb(185, 200, 224); }

.navbar-inverse .navbar-nav > li > a { color: rgb(185, 200, 224); }

.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus { color: rgb(255, 255, 255); background-color: transparent; }

.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus { color: rgb(255, 255, 255); background-color: rgb(17, 31, 54); }

.navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus { color: rgb(68, 68, 68); background-color: transparent; }

.navbar-inverse .navbar-toggle { border-color: rgb(51, 51, 51); }

.navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus { background-color: rgb(51, 51, 51); }

.navbar-inverse .navbar-toggle .icon-bar { background-color: rgb(255, 255, 255); }

.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form { border-color: rgb(21, 38, 66); }

.navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus { background-color: rgb(17, 31, 54); color: rgb(255, 255, 255); }

.navbar-inverse .navbar-nav > .dropdown > a:hover .caret { border-top-color: rgb(255, 255, 255); border-bottom-color: rgb(255, 255, 255); }

.navbar-inverse .navbar-nav > .dropdown > a .caret { border-top-color: rgb(185, 200, 224); border-bottom-color: rgb(185, 200, 224); }

.navbar-inverse .navbar-nav > .open > a .caret, .navbar-inverse .navbar-nav > .open > a:hover .caret, .navbar-inverse .navbar-nav > .open > a:focus .caret { border-top-color: rgb(255, 255, 255); border-bottom-color: rgb(255, 255, 255); }

@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header { border-color: rgb(17, 31, 54); }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a { color: rgb(185, 200, 224); }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus { color: rgb(255, 255, 255); background-color: transparent; }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus { color: rgb(255, 255, 255); background-color: rgb(17, 31, 54); }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus { color: rgb(68, 68, 68); background-color: transparent; }
}

.navbar-inverse .navbar-link { color: rgb(185, 200, 224); }

.navbar-inverse .navbar-link:hover { color: rgb(255, 255, 255); }

.breadcrumb { padding: 8px 15px; margin-bottom: 20px; list-style: none; background-color: rgb(245, 245, 245); border-radius: 4px; }

.breadcrumb > li { display: inline-block; }

.breadcrumb > li + li::before { content: "/ "; padding: 0px 5px; color: rgb(204, 204, 204); }

.breadcrumb > .active { color: rgb(153, 153, 153); }

.pagination { display: inline-block; padding-left: 0px; margin: 20px 0px; border-radius: 4px; }

.pagination > li { display: inline; }

.pagination > li > a, .pagination > li > span { position: relative; float: left; padding: 6px 12px; line-height: 1.42857; text-decoration: none; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); margin-left: -1px; }

.pagination > li:first-child > a, .pagination > li:first-child > span { margin-left: 0px; border-bottom-left-radius: 4px; border-top-left-radius: 4px; }

.pagination > li:last-child > a, .pagination > li:last-child > span { border-bottom-right-radius: 4px; border-top-right-radius: 4px; }

.pagination > li > a:hover, .pagination > li > span:hover, .pagination > li > a:focus, .pagination > li > span:focus { background-color: rgb(238, 238, 238); }

.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus { z-index: 2; color: rgb(255, 255, 255); background-color: rgb(66, 139, 202); border-color: rgb(66, 139, 202); cursor: default; }

.pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus { color: rgb(153, 153, 153); background-color: rgb(255, 255, 255); border-color: rgb(221, 221, 221); cursor: not-allowed; }

.pagination-lg > li > a, .pagination-lg > li > span { padding: 10px 16px; font-size: 18px; }

.pagination-lg > li:first-child > a, .pagination-lg > li:first-child > span { border-bottom-left-radius: 6px; border-top-left-radius: 6px; }

.pagination-lg > li:last-child > a, .pagination-lg > li:last-child > span { border-bottom-right-radius: 6px; border-top-right-radius: 6px; }

.pagination-sm > li > a, .pagination-sm > li > span { padding: 5px 10px; font-size: 12px; }

.pagination-sm > li:first-child > a, .pagination-sm > li:first-child > span { border-bottom-left-radius: 3px; border-top-left-radius: 3px; }

.pagination-sm > li:last-child > a, .pagination-sm > li:last-child > span { border-bottom-right-radius: 3px; border-top-right-radius: 3px; }

.pager { padding-left: 0px; margin: 20px 0px; list-style: none; text-align: center; }

.pager::before, .pager::after { content: " "; display: table; }

.pager::after { clear: both; }

.pager::before, .pager::after { content: " "; display: table; }

.pager::after { clear: both; }

.pager li { display: inline; }

.pager li > a, .pager li > span { display: inline-block; padding: 5px 14px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); border-radius: 15px; }

.pager li > a:hover, .pager li > a:focus { text-decoration: none; background-color: rgb(238, 238, 238); }

.pager .next > a, .pager .next > span { float: right; }

.pager .previous > a, .pager .previous > span { float: left; }

.pager .disabled > a, .pager .disabled > a:hover, .pager .disabled > a:focus, .pager .disabled > span { color: rgb(153, 153, 153); background-color: rgb(255, 255, 255); cursor: not-allowed; }

.label { display: inline; padding: 0.2em 0.6em 0.3em; font-size: 75%; font-weight: bold; line-height: 1; color: rgb(255, 255, 255); text-align: center; white-space: nowrap; vertical-align: baseline; border-radius: 0.25em; }

.label[href]:hover, .label[href]:focus { color: rgb(255, 255, 255); text-decoration: none; cursor: pointer; }

.label:empty { display: none; }

.label-default { background-color: rgb(153, 153, 153); }

.label-default[href]:hover, .label-default[href]:focus { background-color: rgb(128, 128, 128); }

.label-primary { background-color: rgb(66, 139, 202); }

.label-primary[href]:hover, .label-primary[href]:focus { background-color: rgb(48, 113, 169); }

.label-success { background-color: rgb(92, 184, 92); }

.label-success[href]:hover, .label-success[href]:focus { background-color: rgb(68, 157, 68); }

.label-info { background-color: rgb(91, 192, 222); }

.label-info[href]:hover, .label-info[href]:focus { background-color: rgb(49, 176, 213); }

.label-warning { background-color: rgb(240, 173, 78); }

.label-warning[href]:hover, .label-warning[href]:focus { background-color: rgb(236, 151, 31); }

.label-danger { background-color: rgb(217, 83, 79); }

.label-danger[href]:hover, .label-danger[href]:focus { background-color: rgb(201, 48, 44); }

.badge { display: inline-block; min-width: 10px; padding: 3px 7px; font-size: 12px; font-weight: bold; color: rgb(255, 255, 255); line-height: 1; vertical-align: baseline; white-space: nowrap; text-align: center; background-color: rgb(153, 153, 153); border-radius: 10px; }

.badge:empty { display: none; }

a.badge:hover, a.badge:focus { color: rgb(255, 255, 255); text-decoration: none; cursor: pointer; }

.btn .badge { position: relative; top: -1px; }

a.list-group-item.active > .badge, .nav-pills > .active > a > .badge { color: rgb(67, 117, 158); background-color: rgb(255, 255, 255); }

.nav-pills > li > a > .badge { margin-left: 3px; }

.jumbotron { padding: 30px; margin-bottom: 30px; font-size: 21px; font-weight: 200; line-height: 2.14286; color: inherit; background-color: rgb(238, 238, 238); }

.jumbotron h1 { line-height: 1; color: inherit; }

.jumbotron p { line-height: 1.4; }

.container .jumbotron { border-radius: 6px; }

@media screen and (min-width: 768px) {
  .jumbotron { padding-top: 48px; padding-bottom: 48px; }
  .container .jumbotron { padding-left: 60px; padding-right: 60px; }
  .jumbotron h1 { font-size: 63px; }
}

.thumbnail { padding: 4px; line-height: 1.42857; background-color: rgb(247, 247, 247); border: 1px solid rgb(221, 221, 221); border-radius: 4px; transition: all 0.2s ease-in-out 0s; max-width: 100%; height: auto; display: block; margin-bottom: 20px; }

.thumbnail > img { display: block; max-width: 100%; height: auto; }

a.thumbnail:hover, a.thumbnail:focus, a.thumbnail.active { border-color: rgb(67, 117, 158); }

.thumbnail > img { margin-left: auto; margin-right: auto; }

.thumbnail .caption { padding: 9px; color: rgb(51, 51, 51); }

.alert { padding: 15px; margin-bottom: 20px; border: 1px solid transparent; border-radius: 4px; }

.alert h4 { margin-top: 0px; color: inherit; }

.alert .alert-link { font-weight: bold; }

.alert > p, .alert > ul { margin-bottom: 0px; }

.alert > p + p { margin-top: 5px; }

.alert-dismissable { padding-right: 35px; }

.alert-dismissable .close { position: relative; top: -2px; right: -21px; color: inherit; }

.alert-success { background-color: rgb(223, 240, 216); border-color: rgb(214, 233, 198); color: rgb(70, 136, 71); }

.alert-success hr { border-top-color: rgb(201, 226, 179); }

.alert-success .alert-link { color: rgb(53, 102, 53); }

.alert-info { background-color: rgb(217, 237, 247); border-color: rgb(188, 232, 241); color: rgb(58, 135, 173); }

.alert-info hr { border-top-color: rgb(166, 225, 236); }

.alert-info .alert-link { color: rgb(45, 105, 135); }

.alert-warning { background-color: rgb(252, 248, 227); border-color: rgb(250, 235, 204); color: rgb(192, 152, 83); }

.alert-warning hr { border-top-color: rgb(247, 225, 181); }

.alert-warning .alert-link { color: rgb(164, 126, 60); }

.alert-danger { background-color: rgb(242, 222, 222); border-color: rgb(235, 204, 209); color: rgb(185, 74, 72); }

.alert-danger hr { border-top-color: rgb(228, 185, 192); }

.alert-danger .alert-link { color: rgb(149, 59, 57); }

@-webkit-keyframes progress-bar-stripes { 
  0% { background-position: 40px 0px; }
  100% { background-position: 0px 0px; }
}

@keyframes progress-bar-stripes { 
  0% { background-position: 40px 0px; }
  100% { background-position: 0px 0px; }
}

.progress { overflow: hidden; height: 20px; margin-bottom: 20px; background-color: rgb(245, 245, 245); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px inset; }

.progress-bar { float: left; width: 0%; height: 100%; font-size: 12px; line-height: 20px; color: rgb(255, 255, 255); text-align: center; background-color: rgb(66, 139, 202); box-shadow: rgba(0, 0, 0, 0.15) 0px -1px 0px inset; transition: width 0.6s ease 0s; }

.progress-striped .progress-bar { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); background-size: 40px 40px; }

.progress.active .progress-bar { animation: 2s linear 0s infinite normal none running progress-bar-stripes; }

.progress-bar-success { background-color: rgb(92, 184, 92); }

.progress-striped .progress-bar-success { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }

.progress-bar-info { background-color: rgb(91, 192, 222); }

.progress-striped .progress-bar-info { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }

.progress-bar-warning { background-color: rgb(240, 173, 78); }

.progress-striped .progress-bar-warning { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }

.progress-bar-danger { background-color: rgb(217, 83, 79); }

.progress-striped .progress-bar-danger { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }

.media, .media-body { overflow: hidden; zoom: 1; }

.media, .media .media { margin-top: 15px; }

.media:first-child { margin-top: 0px; }

.media-object { display: block; }

.media-heading { margin: 0px 0px 5px; }

.media > .pull-left { margin-right: 10px; }

.media > .pull-right { margin-left: 10px; }

.media-list { padding-left: 0px; list-style: none; }

.list-group { margin-bottom: 20px; padding-left: 0px; }

.list-group-item { position: relative; display: block; padding: 10px 15px; margin-bottom: -1px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); }

.list-group-item:first-child { border-top-right-radius: 4px; border-top-left-radius: 4px; }

.list-group-item:last-child { margin-bottom: 0px; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; }

.list-group-item > .badge { float: right; }

.list-group-item > .badge + .badge { margin-right: 5px; }

a.list-group-item { color: rgb(85, 85, 85); }

a.list-group-item .list-group-item-heading { color: rgb(51, 51, 51); }

a.list-group-item:hover, a.list-group-item:focus { text-decoration: none; background-color: rgb(245, 245, 245); }

a.list-group-item.active, a.list-group-item.active:hover, a.list-group-item.active:focus { z-index: 2; color: rgb(255, 255, 255); background-color: rgb(66, 139, 202); border-color: rgb(66, 139, 202); }

a.list-group-item.active .list-group-item-heading, a.list-group-item.active:hover .list-group-item-heading, a.list-group-item.active:focus .list-group-item-heading { color: inherit; }

a.list-group-item.active .list-group-item-text, a.list-group-item.active:hover .list-group-item-text, a.list-group-item.active:focus .list-group-item-text { color: rgb(225, 237, 247); }

.list-group-item-heading { margin-top: 0px; margin-bottom: 5px; }

.list-group-item-text { margin-bottom: 0px; line-height: 1.3; }

.panel { margin-bottom: 20px; background-color: rgb(255, 255, 255); border: 1px solid transparent; border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px; }

.panel-body { padding: 15px; }

.panel-body::before, .panel-body::after { content: " "; display: table; }

.panel-body::after { clear: both; }

.panel-body::before, .panel-body::after { content: " "; display: table; }

.panel-body::after { clear: both; }

.panel > .list-group { margin-bottom: 0px; }

.panel > .list-group .list-group-item { border-width: 1px 0px; }

.panel > .list-group .list-group-item:first-child { border-top-right-radius: 0px; border-top-left-radius: 0px; }

.panel > .list-group .list-group-item:last-child { border-bottom: 0px; }

.panel-heading + .list-group .list-group-item:first-child { border-top-width: 0px; }

.panel > .table, .panel > .table-responsive { margin-bottom: 0px; }

.panel > .panel-body + .table, .panel > .panel-body + .table-responsive { border-top: 1px solid rgb(221, 221, 221); }

.panel > .table-bordered, .panel > .table-responsive > .table-bordered { border: 0px; }

.panel > .table-bordered > thead > tr > th:first-child, .panel > .table-responsive > .table-bordered > thead > tr > th:first-child, .panel > .table-bordered > tbody > tr > th:first-child, .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child, .panel > .table-bordered > tfoot > tr > th:first-child, .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child, .panel > .table-bordered > thead > tr > td:first-child, .panel > .table-responsive > .table-bordered > thead > tr > td:first-child, .panel > .table-bordered > tbody > tr > td:first-child, .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child, .panel > .table-bordered > tfoot > tr > td:first-child, .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child { border-left: 0px; }

.panel > .table-bordered > thead > tr > th:last-child, .panel > .table-responsive > .table-bordered > thead > tr > th:last-child, .panel > .table-bordered > tbody > tr > th:last-child, .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child, .panel > .table-bordered > tfoot > tr > th:last-child, .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child, .panel > .table-bordered > thead > tr > td:last-child, .panel > .table-responsive > .table-bordered > thead > tr > td:last-child, .panel > .table-bordered > tbody > tr > td:last-child, .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child, .panel > .table-bordered > tfoot > tr > td:last-child, .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child { border-right: 0px; }

.panel > .table-bordered > thead > tr:last-child > th, .panel > .table-responsive > .table-bordered > thead > tr:last-child > th, .panel > .table-bordered > tbody > tr:last-child > th, .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th, .panel > .table-bordered > tfoot > tr:last-child > th, .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th, .panel > .table-bordered > thead > tr:last-child > td, .panel > .table-responsive > .table-bordered > thead > tr:last-child > td, .panel > .table-bordered > tbody > tr:last-child > td, .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td, .panel > .table-bordered > tfoot > tr:last-child > td, .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td { border-bottom: 0px; }

.panel-heading { padding: 10px 15px; border-bottom: 1px solid transparent; border-top-right-radius: 3px; border-top-left-radius: 3px; }

.panel-title { margin-top: 0px; margin-bottom: 0px; font-size: 16px; }

.panel-title > a { color: inherit; }

.panel-footer { padding: 10px 15px; background-color: rgb(245, 245, 245); border-top: 1px solid rgb(221, 221, 221); border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; }

.panel-group .panel { margin-bottom: 0px; border-radius: 4px; overflow: hidden; }

.panel-group .panel + .panel { margin-top: 5px; }

.panel-group .panel-heading { border-bottom: 0px; }

.panel-group .panel-heading + .panel-collapse .panel-body { border-top: 1px solid rgb(221, 221, 221); }

.panel-group .panel-footer { border-top: 0px; }

.panel-group .panel-footer + .panel-collapse .panel-body { border-bottom: 1px solid rgb(221, 221, 221); }

.panel-default { border-color: rgb(221, 221, 221); }

.panel-default > .panel-heading { color: rgb(51, 51, 51); background-color: rgb(245, 245, 245); border-color: rgb(221, 221, 221); }

.panel-default > .panel-heading + .panel-collapse .panel-body { border-top-color: rgb(221, 221, 221); }

.panel-default > .panel-footer + .panel-collapse .panel-body { border-bottom-color: rgb(221, 221, 221); }

.panel-primary { border-color: rgb(66, 139, 202); }

.panel-primary > .panel-heading { color: rgb(255, 255, 255); background-color: rgb(66, 139, 202); border-color: rgb(66, 139, 202); }

.panel-primary > .panel-heading + .panel-collapse .panel-body { border-top-color: rgb(66, 139, 202); }

.panel-primary > .panel-footer + .panel-collapse .panel-body { border-bottom-color: rgb(66, 139, 202); }

.panel-success { border-color: rgb(214, 233, 198); }

.panel-success > .panel-heading { color: rgb(70, 136, 71); background-color: rgb(223, 240, 216); border-color: rgb(214, 233, 198); }

.panel-success > .panel-heading + .panel-collapse .panel-body { border-top-color: rgb(214, 233, 198); }

.panel-success > .panel-footer + .panel-collapse .panel-body { border-bottom-color: rgb(214, 233, 198); }

.panel-warning { border-color: rgb(250, 235, 204); }

.panel-warning > .panel-heading { color: rgb(192, 152, 83); background-color: rgb(252, 248, 227); border-color: rgb(250, 235, 204); }

.panel-warning > .panel-heading + .panel-collapse .panel-body { border-top-color: rgb(250, 235, 204); }

.panel-warning > .panel-footer + .panel-collapse .panel-body { border-bottom-color: rgb(250, 235, 204); }

.panel-danger { border-color: rgb(235, 204, 209); }

.panel-danger > .panel-heading { color: rgb(185, 74, 72); background-color: rgb(242, 222, 222); border-color: rgb(235, 204, 209); }

.panel-danger > .panel-heading + .panel-collapse .panel-body { border-top-color: rgb(235, 204, 209); }

.panel-danger > .panel-footer + .panel-collapse .panel-body { border-bottom-color: rgb(235, 204, 209); }

.panel-info { border-color: rgb(188, 232, 241); }

.panel-info > .panel-heading { color: rgb(58, 135, 173); background-color: rgb(217, 237, 247); border-color: rgb(188, 232, 241); }

.panel-info > .panel-heading + .panel-collapse .panel-body { border-top-color: rgb(188, 232, 241); }

.panel-info > .panel-footer + .panel-collapse .panel-body { border-bottom-color: rgb(188, 232, 241); }

.well { min-height: 20px; padding: 19px; margin-bottom: 20px; background-color: rgb(245, 245, 245); border: 1px solid rgb(227, 227, 227); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px inset; }

.well blockquote { border-color: rgba(0, 0, 0, 0.15); }

.well-lg { padding: 24px; border-radius: 6px; }

.well-sm { padding: 9px; border-radius: 3px; }

.close { float: right; font-size: 21px; font-weight: bold; line-height: 1; color: rgb(0, 0, 0); text-shadow: rgb(255, 255, 255) 0px 1px 0px; opacity: 0.2; }

.close:hover, .close:focus { color: rgb(0, 0, 0); text-decoration: none; cursor: pointer; opacity: 0.5; }

button.close { padding: 0px; cursor: pointer; background: transparent; border: 0px; appearance: none; }

.modal-open { overflow: hidden; }

.modal { display: none; overflow: auto scroll; position: fixed; inset: 0px; z-index: 1040; }

.modal.fade .modal-dialog { transform: translate(0px, -25%); transition: transform 0.3s ease-out 0s; }

.modal.in .modal-dialog { transform: translate(0px, 0px); }

.modal-dialog { margin-left: auto; margin-right: auto; width: auto; padding: 10px; z-index: 1050; }

.modal-content { position: relative; background-color: rgb(255, 255, 255); border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 9px; background-clip: padding-box; outline: none; }

.modal-backdrop { position: fixed; inset: 0px; z-index: 1030; background-color: rgb(0, 0, 0); }

.modal-backdrop.fade { opacity: 0; }

.modal-backdrop.in { opacity: 0.5; }

.modal-header { padding: 15px; border-bottom: 1px solid rgb(229, 229, 229); min-height: 16.4286px; }

.modal-header .close { margin-top: -2px; }

.modal-title { margin: 0px; line-height: 1.42857; }

.modal-body { position: relative; padding: 20px; }

.modal-footer { margin-top: 15px; padding: 19px 20px 20px; text-align: right; border-top: 1px solid rgb(229, 229, 229); }

.modal-footer::before, .modal-footer::after { content: " "; display: table; }

.modal-footer::after { clear: both; }

.modal-footer::before, .modal-footer::after { content: " "; display: table; }

.modal-footer::after { clear: both; }

.modal-footer .btn + .btn { margin-left: 5px; margin-bottom: 0px; }

.modal-footer .btn-group .btn + .btn { margin-left: -1px; }

.modal-footer .btn-block + .btn-block { margin-left: 0px; }

@media screen and (min-width: 768px) {
  .modal-dialog { width: 600px; padding-top: 30px; padding-bottom: 30px; }
  .modal-content { box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px; }
}

.tooltip { position: absolute; z-index: 1030; display: block; visibility: visible; font-size: 12px; line-height: 1.4; opacity: 0; }

.tooltip.in { opacity: 0.9; }

.tooltip.top { margin-top: -3px; padding: 5px 0px; }

.tooltip.right { margin-left: 3px; padding: 0px 5px; }

.tooltip.bottom { margin-top: 3px; padding: 5px 0px; }

.tooltip.left { margin-left: -3px; padding: 0px 5px; }

.tooltip-inner { max-width: 200px; padding: 3px 8px; color: rgb(255, 255, 255); text-align: center; text-decoration: none; background-color: rgb(0, 0, 0); border-radius: 4px; }

.tooltip-arrow { position: absolute; width: 0px; height: 0px; border-color: transparent; border-style: solid; }

.tooltip.top .tooltip-arrow { bottom: 0px; left: 50%; margin-left: -5px; border-width: 5px 5px 0px; border-top-color: rgb(0, 0, 0); }

.tooltip.top-left .tooltip-arrow { bottom: 0px; left: 5px; border-width: 5px 5px 0px; border-top-color: rgb(0, 0, 0); }

.tooltip.top-right .tooltip-arrow { bottom: 0px; right: 5px; border-width: 5px 5px 0px; border-top-color: rgb(0, 0, 0); }

.tooltip.right .tooltip-arrow { top: 50%; left: 0px; margin-top: -5px; border-width: 5px 5px 5px 0px; border-right-color: rgb(0, 0, 0); }

.tooltip.left .tooltip-arrow { top: 50%; right: 0px; margin-top: -5px; border-width: 5px 0px 5px 5px; border-left-color: rgb(0, 0, 0); }

.tooltip.bottom .tooltip-arrow { top: 0px; left: 50%; margin-left: -5px; border-width: 0px 5px 5px; border-bottom-color: rgb(0, 0, 0); }

.tooltip.bottom-left .tooltip-arrow { top: 0px; left: 5px; border-width: 0px 5px 5px; border-bottom-color: rgb(0, 0, 0); }

.tooltip.bottom-right .tooltip-arrow { top: 0px; right: 5px; border-width: 0px 5px 5px; border-bottom-color: rgb(0, 0, 0); }

.popover { position: absolute; top: 0px; left: 0px; z-index: 1010; display: none; padding: 1px; text-align: left; background-color: rgb(255, 255, 255); background-clip: padding-box; border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px; white-space: normal; }

.popover.top { margin-top: -10px; }

.popover.right { margin-left: 10px; }

.popover.bottom { margin-top: 10px; }

.popover.left { margin-left: -10px; }

.popover-title { margin: 0px; padding: 8px 14px; font-size: 14px; font-weight: normal; line-height: 18px; background-color: rgb(247, 247, 247); border-bottom: 1px solid rgb(235, 235, 235); border-radius: 5px 5px 0px 0px; }

.popover-content { padding: 9px 14px; }

.popover .arrow, .popover .arrow::after { position: absolute; display: block; width: 0px; height: 0px; border-color: transparent; border-style: solid; }

.popover .arrow { border-width: 11px; }

.popover .arrow::after { border-width: 10px; content: ""; }

.popover.top .arrow { left: 50%; margin-left: -11px; border-bottom-width: 0px; border-top-color: rgba(0, 0, 0, 0.25); bottom: -11px; }

.popover.top .arrow::after { content: " "; bottom: 1px; margin-left: -10px; border-bottom-width: 0px; border-top-color: rgb(255, 255, 255); }

.popover.right .arrow { top: 50%; left: -11px; margin-top: -11px; border-left-width: 0px; border-right-color: rgba(0, 0, 0, 0.25); }

.popover.right .arrow::after { content: " "; left: 1px; bottom: -10px; border-left-width: 0px; border-right-color: rgb(255, 255, 255); }

.popover.bottom .arrow { left: 50%; margin-left: -11px; border-top-width: 0px; border-bottom-color: rgba(0, 0, 0, 0.25); top: -11px; }

.popover.bottom .arrow::after { content: " "; top: 1px; margin-left: -10px; border-top-width: 0px; border-bottom-color: rgb(255, 255, 255); }

.popover.left .arrow { top: 50%; right: -11px; margin-top: -11px; border-right-width: 0px; border-left-color: rgba(0, 0, 0, 0.25); }

.popover.left .arrow::after { content: " "; right: 1px; border-right-width: 0px; border-left-color: rgb(255, 255, 255); bottom: -10px; }

.carousel { position: relative; }

.carousel-inner { position: relative; overflow: hidden; width: 100%; }

.carousel-inner > .item { display: none; position: relative; transition: left 0.6s ease-in-out 0s; }

.carousel-inner > .item > img, .carousel-inner > .item > a > img { display: block; max-width: 100%; height: auto; line-height: 1; }

.carousel-inner > .active, .carousel-inner > .next, .carousel-inner > .prev { display: block; }

.carousel-inner > .active { left: 0px; }

.carousel-inner > .next, .carousel-inner > .prev { position: absolute; top: 0px; width: 100%; }

.carousel-inner > .next { left: 100%; }

.carousel-inner > .prev { left: -100%; }

.carousel-inner > .next.left, .carousel-inner > .prev.right { left: 0px; }

.carousel-inner > .active.left { left: -100%; }

.carousel-inner > .active.right { left: 100%; }

.carousel-control { position: absolute; top: 0px; left: 0px; bottom: 0px; width: 15%; opacity: 0.5; font-size: 20px; color: rgb(255, 255, 255); text-align: center; text-shadow: rgba(0, 0, 0, 0.6) 0px 1px 2px; }

.carousel-control.left { background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%); background-repeat: repeat-x; }

.carousel-control.right { left: auto; right: 0px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%); background-repeat: repeat-x; }

.carousel-control:hover, .carousel-control:focus { color: rgb(255, 255, 255); text-decoration: none; opacity: 0.9; }

.carousel-control .icon-prev, .carousel-control .icon-next, .carousel-control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right { position: absolute; top: 50%; z-index: 5; display: inline-block; }

.carousel-control .icon-prev, .carousel-control .glyphicon-chevron-left { left: 50%; }

.carousel-control .icon-next, .carousel-control .glyphicon-chevron-right { right: 50%; }

.carousel-control .icon-prev, .carousel-control .icon-next { width: 20px; height: 20px; margin-top: -10px; margin-left: -10px; font-family: serif; }

.carousel-control .icon-prev::before { content: "‹"; }

.carousel-control .icon-next::before { content: "›"; }

.carousel-indicators { position: absolute; bottom: 10px; left: 50%; z-index: 15; width: 60%; margin-left: -30%; padding-left: 0px; list-style: none; text-align: center; }

.carousel-indicators li { display: inline-block; width: 10px; height: 10px; margin: 1px; text-indent: -999px; border: 1px solid rgb(255, 255, 255); border-radius: 10px; cursor: pointer; }

.carousel-indicators .active { margin: 0px; width: 12px; height: 12px; background-color: rgb(255, 255, 255); }

.carousel-caption { position: absolute; left: 15%; right: 15%; bottom: 20px; z-index: 10; padding-top: 20px; padding-bottom: 20px; color: rgb(255, 255, 255); text-align: center; text-shadow: rgba(0, 0, 0, 0.6) 0px 1px 2px; }

.carousel-caption .btn { text-shadow: none; }

@media screen and (min-width: 768px) {
  .carousel-control .glyphicons-chevron-left, .carousel-control .glyphicons-chevron-right, .carousel-control .icon-prev, .carousel-control .icon-next { width: 30px; height: 30px; margin-top: -15px; margin-left: -15px; font-size: 30px; }
  .carousel-caption { left: 20%; right: 20%; padding-bottom: 30px; }
  .carousel-indicators { bottom: 20px; }
}

body { position: relative; padding-top: 50px; }

.table code { font-size: 13px; font-weight: normal; }

.bs-social { margin-top: 20px; margin-bottom: 20px; text-align: center; }

.bs-social-buttons { display: inline-block; margin-bottom: 0px; padding-left: 0px; list-style: none; }

.bs-social-buttons li { display: inline-block; line-height: 1; padding: 5px 8px; }

.bs-social-buttons .twitter-follow-button { width: 225px !important; }

.bs-social-buttons .twitter-share-button { width: 98px !important; }

.github-btn { border: 0px; overflow: hidden; }

@media (min-width: 768px) {
  .bs-social { text-align: left; }
  .bs-social-buttons li:first-child { padding-left: 0px; }
}

.bs-masthead { position: relative; padding: 30px 15px; text-align: center; text-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px; }

.bs-masthead h1 { font-size: 50px; line-height: 1; color: rgb(255, 255, 255); }

.bs-masthead .btn-outline-inverse { margin: 10px; }

.bs-masthead-links { margin-top: 20px; margin-bottom: 40px; padding: 0px 15px; list-style: none; text-align: center; }

.bs-masthead-links li { display: inline; }

.bs-masthead-links li + li { margin-left: 20px; }

.bs-masthead-links a { color: rgb(255, 255, 255); }

@media (min-width: 768px) {
  .bs-masthead { text-align: left; padding-top: 140px; padding-bottom: 140px; }
  .bs-masthead h1 { font-size: 100px; }
  .bs-masthead .lead { margin-right: 25%; font-size: 30px; }
  .bs-masthead .btn-outline-inverse { width: auto; margin: 20px 5px 20px 0px; padding: 18px 24px; font-size: 21px; }
  .bs-masthead-links { padding: 0px; text-align: left; }
}

.bs-old-docs { padding: 15px 20px; color: rgb(119, 119, 119); background-color: rgb(250, 250, 250); border-top: 1px solid rgb(255, 255, 255); border-bottom: 1px solid rgb(229, 229, 229); }

.bs-old-docs strong { color: rgb(85, 85, 85); }

.show-grid { margin-bottom: 15px; }

.show-grid [class^="col-"] { padding-top: 10px; padding-bottom: 10px; background-color: rgba(86, 61, 124, 0.15); border: 1px solid rgba(86, 61, 124, 0.2); }

.bs-example { position: relative; padding: 45px 15px 15px; margin: 0px -15px 15px; background-color: rgb(250, 250, 250); box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 6px inset; border-color: rgb(229, 229, 229) rgb(238, 238, 238) rgb(238, 238, 238); border-style: solid; border-width: 1px 0px; }

.bs-example::after { content: "Example"; position: absolute; top: 15px; left: 15px; font-size: 12px; font-weight: bold; color: rgb(187, 187, 187); text-transform: uppercase; letter-spacing: 1px; }

.bs-example + .highlight { margin: -15px -15px 15px; border-radius: 0px; border-width: 0px 0px 1px; }

@media (min-width: 768px) {
  .bs-example { margin-left: 0px; margin-right: 0px; background-color: rgb(255, 255, 255); border-width: 1px; border-color: rgb(221, 221, 221); border-radius: 4px 4px 0px 0px; box-shadow: none; }
  .bs-example + .highlight { margin-top: -16px; margin-left: 0px; margin-right: 0px; border-width: 1px; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; }
}

.bs-example .container { width: auto; }

.bs-example > p:last-child, .bs-example > ul:last-child, .bs-example > ol:last-child, .bs-example > blockquote:last-child, .bs-example > .form-control:last-child, .bs-example > .table:last-child, .bs-example > .navbar:last-child, .bs-example > .jumbotron:last-child, .bs-example > .alert:last-child, .bs-example > .panel:last-child, .bs-example > .list-group:last-child, .bs-example > .well:last-child, .bs-example > .progress:last-child, .bs-example > .table-responsive:last-child > .table { margin-bottom: 0px; }

.bs-example > p > .close { float: none; }

.bs-example-type .table .info { color: rgb(153, 153, 153); vertical-align: middle; }

.bs-example-type .table td { padding: 15px 0px; border-color: rgb(238, 238, 238); }

.bs-example-type .table tr:first-child td { border-top: 0px; }

.bs-example-type h1, .bs-example-type h2, .bs-example-type h3, .bs-example-type h4, .bs-example-type h5, .bs-example-type h6 { margin: 0px; }

.bs-example > .img-circle, .bs-example > .img-rounded, .bs-example > .img-thumbnail { margin: 5px; }

.bs-example > .table-responsive > .table { background-color: rgb(255, 255, 255); }

.bs-example > .btn, .bs-example > .btn-group { margin-top: 5px; margin-bottom: 5px; }

.bs-example > .btn-toolbar + .btn-toolbar { margin-top: 10px; }

.bs-example-control-sizing select, .bs-example-control-sizing input[type="text"] + input[type="text"] { margin-top: 10px; }

.bs-example-form .input-group { margin-bottom: 10px; }

.bs-example > textarea.form-control { resize: vertical; }

.bs-example > .list-group { max-width: 400px; }

.bs-example .navbar:last-child { margin-bottom: 0px; }

.bs-navbar-top-example, .bs-navbar-bottom-example { z-index: 1; padding: 0px; overflow: hidden; }

.bs-navbar-top-example .navbar-header, .bs-navbar-bottom-example .navbar-header { margin-left: 0px; }

.bs-navbar-top-example .navbar-fixed-top, .bs-navbar-bottom-example .navbar-fixed-bottom { position: relative; margin-left: 0px; margin-right: 0px; }

.bs-navbar-top-example { padding-bottom: 45px; }

.bs-navbar-top-example::after { top: auto; bottom: 15px; }

.bs-navbar-top-example .navbar-fixed-top { top: -1px; }

.bs-navbar-bottom-example { padding-top: 45px; }

.bs-navbar-bottom-example .navbar-fixed-bottom { bottom: -1px; }

.bs-navbar-bottom-example .navbar { margin-bottom: 0px; }

@media (min-width: 768px) {
  .bs-navbar-top-example .navbar-fixed-top, .bs-navbar-bottom-example .navbar-fixed-bottom { position: absolute; }
  .bs-navbar-top-example { border-radius: 0px 0px 4px 4px; }
  .bs-navbar-bottom-example { border-radius: 4px 4px 0px 0px; }
}

.bs-example .pagination { margin-top: 10px; margin-bottom: 10px; }

.bs-example > .pager { margin-top: 0px; }

.bs-example-modal { background-color: rgb(245, 245, 245); }

.bs-example-modal .modal { position: relative; inset: auto; z-index: 1; display: block; }

.bs-example-modal .modal-dialog { left: auto; margin-left: auto; margin-right: auto; }

.bs-example > .dropdown > .dropdown-menu { position: static; display: block; margin-bottom: 5px; }

.bs-example-tabs .nav-tabs { margin-bottom: 15px; }

.bs-example-tooltips { text-align: center; }

.bs-example-tooltips > .btn { margin-top: 5px; margin-bottom: 5px; }

.bs-example-popover { padding-bottom: 24px; background-color: rgb(249, 249, 249); }

.bs-example-popover .popover { position: relative; display: block; float: left; width: 260px; margin: 20px; }

.scrollspy-example { position: relative; height: 200px; margin-top: 10px; overflow: auto; }

.highlight { display: none; padding: 9px 14px; margin-bottom: 14px; background-color: rgb(247, 247, 249); border: 1px solid rgb(225, 225, 232); border-radius: 4px; }

.highlight pre { padding: 0px; margin-top: 0px; margin-bottom: 0px; background-color: transparent; border: 0px; white-space: nowrap; }

.highlight pre code { font-size: inherit; color: rgb(51, 51, 51); }

.highlight pre .lineno { display: inline-block; width: 22px; padding-right: 5px; margin-right: 10px; text-align: right; color: rgb(190, 190, 197); }

@media (min-width: 481px) {
  .highlight { display: block; }
}

.table-responsive .highlight pre { white-space: normal; }

.bs-table th small, .responsive-utilities th small { display: block; font-weight: normal; color: rgb(153, 153, 153); }

.responsive-utilities tbody th { font-weight: normal; }

.responsive-utilities td { text-align: center; }

.responsive-utilities td.is-visible { color: rgb(70, 136, 71); background-color: rgb(223, 240, 216) !important; }

.responsive-utilities td.is-hidden { color: rgb(204, 204, 204); background-color: rgb(249, 249, 249) !important; }

.responsive-utilities-test { margin-top: 5px; }

.responsive-utilities-test .col-xs-6 { margin-bottom: 10px; }

.responsive-utilities-test span { padding: 15px 10px; font-size: 14px; font-weight: bold; line-height: 1.1; text-align: center; border-radius: 4px; }

.visible-on .col-xs-6 .hidden-xs, .visible-on .col-xs-6 .hidden-sm, .visible-on .col-xs-6 .hidden-md, .visible-on .col-xs-6 .hidden-lg, .hidden-on .col-xs-6 .hidden-xs, .hidden-on .col-xs-6 .hidden-sm, .hidden-on .col-xs-6 .hidden-md, .hidden-on .col-xs-6 .hidden-lg { color: rgb(153, 153, 153); border: 1px solid rgb(221, 221, 221); }

.visible-on .col-xs-6 .visible-xs, .visible-on .col-xs-6 .visible-sm, .visible-on .col-xs-6 .visible-md, .visible-on .col-xs-6 .visible-lg, .hidden-on .col-xs-6 .visible-xs, .hidden-on .col-xs-6 .visible-sm, .hidden-on .col-xs-6 .visible-md, .hidden-on .col-xs-6 .visible-lg { color: rgb(70, 136, 71); background-color: rgb(223, 240, 216); border: 1px solid rgb(214, 233, 198); }

.bs-glyphicons { padding-left: 0px; padding-bottom: 1px; margin-bottom: 20px; list-style: none; overflow: hidden; }

.bs-glyphicons li { float: left; width: 25%; height: 115px; padding: 10px; margin: 0px -1px -1px 0px; font-size: 12px; line-height: 1.4; text-align: center; border: 1px solid rgb(221, 221, 221); }

.bs-glyphicons .glyphicon { margin-top: 5px; margin-bottom: 10px; font-size: 24px; }

.bs-glyphicons .glyphicon-class { display: block; text-align: center; }

.bs-glyphicons li:hover { background-color: rgba(86, 61, 124, 0.1); }

@media (min-width: 768px) {
  .bs-glyphicons li { width: 12.5%; }
}

.bs-customizer .toggle { float: right; margin-top: 85px; }

.bs-customizer label { margin-top: 10px; font-weight: 500; color: rgb(85, 85, 85); }

.bs-customizer h2 { margin-top: 0px; margin-bottom: 5px; padding-top: 30px; }

.bs-customizer h3 { margin-bottom: 0px; }

.bs-customizer h4 { margin-top: 15px; margin-bottom: 0px; }

.bs-customizer .bs-callout h4 { margin-top: 0px; margin-bottom: 5px; }

.bs-customizer input[type="text"] { font-family: Menlo, Monaco, Consolas, "Courier New", monospace; background-color: rgb(250, 250, 250); }

.bs-customizer .help-block { font-size: 12px; margin-bottom: 5px; }

#less-section label { font-weight: normal; }

.bs-examples h4 { margin-bottom: 5px; }

.bs-examples p { margin-bottom: 20px; }

#focusedInput { border-color: rgba(82, 168, 236, 0.8); outline: 0px; box-shadow: rgba(82, 168, 236, 0.6) 0px 0px 8px; }

.docs-dl-options h4 { margin-top: 15px; margin-bottom: 5px; }

pre code { display: block; padding: 0.5em; color: rgb(57, 57, 57); }

.hljs-comment { color: rgb(147, 147, 147); font-style: italic; }

.hljs-id { color: rgb(214, 79, 0); }

.hljs-class { color: rgb(0, 53, 138); }

.hljs-variable { color: rgb(101, 0, 163); }

.hljs-tag { color: rgb(0, 53, 138); }

.hljs-keyword { color: rgb(0, 53, 138); }

.hljs-built_in { color: rgb(0, 53, 138); }

.hljs-pseudo { color: rgb(101, 0, 163); }

.hljs-value { color: rgb(0, 163, 163); }

.hljs-number { color: rgb(0, 163, 163); }

.hljs-hexcolor { color: rgb(0, 163, 163); }

.hljs-literal { color: rgb(0, 163, 163); }

.hljs-attribute { color: rgb(0, 120, 189); }

.hljs-attr_selector { color: rgb(214, 79, 0); }

.hljs-attr { color: rgb(214, 79, 0); }

.hljs-name { color: rgb(0, 120, 189); }

.hljs-at_rule { color: rgb(240, 8, 0); }

.hljs-string { color: rgb(76, 138, 0); }

.lang-less .hljs-keyword { color: rgb(0, 53, 138); }

.lang-less .hljs-built_in { color: rgb(163, 114, 0); }

h1, h2, h3 { margin-top: 30px; margin-bottom: 15px; }

*, ::before, ::after { box-sizing: border-box; }

html { font-size: 62.5%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }

body { font-family: Oxygen, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.42857; color: rgb(51, 51, 51); background-color: rgb(247, 247, 247); }

input, button, select, textarea { font-family: inherit; font-size: inherit; line-height: inherit; }

a { color: rgb(67, 117, 158); text-decoration: none; }

a:hover, a:focus { color: rgb(44, 77, 104); text-decoration: underline; }

a:focus { outline: -webkit-focus-ring-color auto 5px; outline-offset: -2px; }

img { vertical-align: middle; }

.img-responsive { display: block; max-width: 100%; height: auto; }

.img-rounded { border-radius: 6px; }

.img-thumbnail { padding: 4px; line-height: 1.42857; background-color: rgb(247, 247, 247); border: 1px solid rgb(221, 221, 221); border-radius: 4px; transition: all 0.2s ease-in-out 0s; display: inline-block; max-width: 100%; height: auto; }

.img-circle { border-radius: 50%; }

hr { margin-top: 20px; margin-bottom: 20px; border-width: 1px 0px 0px; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image: initial; border-top-style: solid; border-top-color: rgb(238, 238, 238); }

.sr-only { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); border: 0px; }

#carbonads { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif; }

#carbonads { display: flex; max-width: 330px; background-color: rgb(250, 250, 250); box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 1px; margin: 1em; }

#carbonads a { color: inherit; text-decoration: none; }

#carbonads a:hover { color: inherit; }

#carbonads span { position: relative; display: block; overflow: hidden; }

#carbonads .carbon-wrap { display: flex; }

.carbon-img { display: block; margin: 0px; line-height: 1; }

.carbon-img img { display: block; }

.carbon-text { font-size: 13px; padding: 10px; line-height: 1.5; text-align: left; }

.carbon-poweredby { display: block; padding: 8px 10px; background: repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(0, 0, 0, 0.024) 5px, rgba(0, 0, 0, 0.024) 10px) rgba(241, 243, 244, 0.4); text-align: center; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; font-size: 9px; line-height: 1; }

.ad { overflow: hidden; text-align: left; box-shadow: rgba(0, 0, 0, 0.075) 0px 3px 5px inset; width: auto !important; margin: 50px -30px -40px !important; padding: 20px !important; height: auto !important; font-size: 13px !important; line-height: 16px !important; background: rgb(23, 43, 74) !important; border: 0px !important; }

.ad-img { margin: 0px !important; }

.ad-text, .ad-tag { float: none !important; display: block !important; width: auto !important; height: auto !important; margin-left: 145px !important; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; }

.ad-text { padding-top: 0px !important; }

.ad-tag { color: rgb(185, 200, 224) !important; text-align: left !important; }

.ad-text a, .ad-tag a { color: rgb(255, 255, 255) !important; }

.ad #adsense > img { display: none; }

@media (min-width: 768px) {
  .ad { border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.075) 0px 3px 5px inset, rgba(255, 255, 255, 0.1) 0px 1px 0px; margin: 0px !important; }
}

@media (min-width: 992px) {
  .ad { position: absolute; top: 20px; right: 15px; padding: 15px !important; width: 330px !important; }
}

.docs-home .ad { margin: 0px -15px 40px !important; }

@media (min-width: 480px) {
  .docs-home .ad { border-radius: 4px; width: 330px !important; margin: 0px auto 40px !important; }
}

@media (min-width: 768px) {
  .docs-home .ad { float: left; width: 330px !important; margin: 0px 0px 30px !important; }
  .docs-home .bs-social, .docs-home .bs-masthead-links { margin-left: 350px; }
  .docs-home .bs-social { margin-bottom: 10px; }
  .docs-home .bs-masthead-links { margin-top: 10px; }
}

@media (min-width: 992px) {
  .docs-home .ad { position: static; }
}

@media (min-width: 1170px) {
  .docs-home .ad { margin-top: -25px !important; }
}

.banner { padding: 15px 20px; color: rgb(119, 119, 119); background-color: rgb(250, 250, 250); border-top: 1px solid rgb(255, 255, 255); border-bottom: 1px solid rgb(229, 229, 229); z-index: 3; position: relative; }

.banner strong { color: rgb(85, 85, 85); }

.callout { margin: 20px 0px; padding: 20px; border-left: 3px solid rgb(238, 238, 238); }

.callout h4 { margin-top: 0px; margin-bottom: 5px; }

.callout p:last-child { margin-bottom: 0px; }

.callout-info { background-color: rgb(244, 248, 250); border-color: rgb(188, 232, 241); }

.callout-info h4 { color: rgb(58, 135, 173); }

.callout-warning { background-color: rgb(250, 248, 240); border-color: rgb(250, 235, 204); }

.callout-warning h4 { color: rgb(192, 152, 83); }

.callout-danger { background-color: rgb(253, 247, 247); border-color: rgb(238, 211, 215); }

.callout-danger h4 { color: rgb(185, 74, 72); }

.docs-header, .docs-home { color: rgb(185, 200, 224); background-color: rgb(29, 54, 93); }

.docs-header { padding: 30px 15px 50px; font-size: 14px; text-align: center; text-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px; }

.docs-header h1 { color: rgb(255, 255, 255); }

.docs-header h3, .docs-header p { color: rgb(185, 200, 224); }

.docs-header h3 { margin-bottom: 3em; }

.docs-header code { background: rgb(11, 26, 40); padding: 2px 4px; white-space: pre-wrap; }

.docs-header p { font-weight: 300; line-height: 1.5; }

.docs-header .container { position: relative; }

@media (min-width: 768px) {
  .docs-header { font-size: 16px; text-align: left; display: flex; min-height: 100vh; align-items: center; }
  .docs-header h1 { font-size: 60px; line-height: 1; }
}

.footer { padding-top: 40px; padding-bottom: 30px; margin-top: 100px; color: rgb(119, 119, 119); background: rgb(255, 255, 255); text-align: center; border-top: 1px solid rgb(238, 238, 238); }

.footer-links { margin: 10px 0px; padding-left: 0px; }

.footer-links li { display: inline; padding: 0px 2px; }

.footer-links li:first-child { padding-left: 0px; }

@media (min-width: 768px) {
  .footer { text-align: left; }
  .footer p { margin-bottom: 0px; }
}

.less-team .team-member { color: rgb(85, 85, 85); line-height: 32px; }

.less-team .team-member:hover { color: rgb(51, 51, 51); text-decoration: none; }

.less-team .github-btn { float: right; margin-top: 6px; width: 185px; height: 20px; }

.less-team img { float: left; width: 32px; margin-right: 10px; border-radius: 4px; }

.docs-section table { margin-bottom: 20px; }

.docs-section td { padding: 0px 10px 5px 0px; }

.docs-content { position: relative; overflow: hidden; background-color: rgb(255, 255, 255); padding: 50px 60px 80px; margin: 0px -15px; border: none; border-radius: 0px 0px 4px 4px; }

.docs-content .container-fluid { padding: 0px; }

.docs-content { box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px; }

@media (max-width: 767px) {
  .docs-content { padding: 50px 20px 1px; }
}

.docs-container { margin-top: -50px; }

.docs-section { margin-bottom: 40px; }

.docs-section:last-child { margin-bottom: 0px; }

.section-content .docs-heading { max-width: 80%; margin-top: 20px; }

.page-heading .docs-heading { }

h1[id] { margin-top: 0px; }

.docs-section { font-family: Oxygen, "Helvetica Neue", Helvetica, Arial, sans-serif; }

.docs-section h1:first-child { margin-top: 40px; }

.docs-section p { font-size: 15px; line-height: 1.5; margin: 10px 0px 20px; }

.docs-section blockquote { position: relative; font-style: normal; font-weight: 500; color: inherit; margin: 0px; border-left-style: none; padding: 0px; }

.docs-section blockquote > p { line-height: 1.5; color: inherit; padding: 0px; }

.docs-section blockquote > p:first-child { font-size: 18px; }

.docs-section td { padding: 0px 10px 5px 0px; vertical-align: top; min-width: 150px; }

.docs-section img { max-width: 100%; }

.section-content { position: relative; }

.sidebar { display: none; }

.sidebar.affix { position: static; }

.sidenav { margin-top: 6px; margin-bottom: 30px; padding-top: 10px; padding-bottom: 10px; text-shadow: rgba(255, 255, 255, 0.5) 0px 1px 0px; background-color: rgb(247, 247, 247); border-radius: 5px; }

.sidebar .nav > li > a { display: block; color: rgb(54, 85, 110); padding: 5px 20px; }

.sidebar .nav > li > a:hover, .sidebar .nav > li > a:focus { text-decoration: none; background-color: rgb(232, 235, 238); border-right: 1px solid rgb(216, 221, 226); }

.sidebar .nav > .active > a, .sidebar .nav > .active:hover > a, .sidebar .nav > .active:focus > a { font-weight: bold; color: rgb(29, 54, 93); background-color: transparent; border-right: 1px solid rgb(29, 54, 93); }

.sidebar .nav .nav { display: none; margin-bottom: 8px; }

.sidebar .nav .nav > li > a { padding: 3px 30px; font-size: 90%; }

.sidebar .glyphicon { font-size: 12px; margin-left: 10px; }

@media (min-width: 992px) {
  .sidebar { display: block; padding-top: 65px; }
  .sidebar .nav > .active > ul { display: block; }
  .sidebar.affix, .sidebar.affix-bottom { width: 213px; }
  .sidebar.affix { position: fixed; top: 15px; bottom: 0px; overflow: auto; }
  .sidebar.affix-bottom { position: absolute; }
  .sidebar.affix .sidenav, .sidebar.affix-bottom .sidenav { margin-top: 10px; margin-bottom: 0px; }
}

@media (min-width: 1200px) {
  .sidebar.affix-bottom, .sidebar.affix { width: 263px; }
}

.docs-nav { text-shadow: rgba(0, 0, 0, 0.15) 0px -1px 0px; background-color: rgb(29, 54, 93); border-color: rgba(0, 0, 0, 0.2); box-shadow: rgba(255, 255, 255, 0.07) 0px 1px 0px; }

.docs-nav .navbar-collapse { border-color: rgb(17, 31, 54); }

.docs-nav .container .navbar-brand { margin: 12px 0px 0px; width: 100px; padding: 0px; }

.docs-nav .container .navbar-brand img { display: block; max-width: 100%; height: auto; }

.docs-nav .navbar-nav > li > a, .docs-nav .navbar-nav > li > span { color: rgb(185, 200, 224); }

.docs-nav .navbar-nav > li > a:hover, .docs-nav .navbar-nav > li > span:hover { color: rgb(255, 255, 255); }

.docs-nav .navbar-nav > .active > a, .docs-nav .navbar-nav > .active > span, .docs-nav .navbar-nav > .active > a:hover, .docs-nav .navbar-nav > .active > span:hover { color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0.2); }

.docs-nav .navbar-toggle { border-color: rgb(29, 54, 93); }

.docs-nav .navbar-toggle:hover { background-color: rgb(17, 31, 54); border-color: rgb(17, 31, 54); }

.btn-outline { color: rgb(29, 54, 93); background-color: rgb(255, 255, 255); border-color: rgb(229, 229, 229); }

.btn-outline:hover, .btn-outline:focus, .btn-outline:active { color: rgb(255, 255, 255); background-color: rgb(29, 54, 93); border-color: rgb(29, 54, 93); }

.btn-outline-inverse { color: rgb(255, 255, 255); background-color: transparent; border-color: rgb(185, 200, 224); }

.btn-outline-inverse:hover, .btn-outline-inverse:focus, .btn-outline-inverse:active { color: rgb(29, 54, 93); text-shadow: none; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }

.anchor, .anchor:empty { position: absolute; top: auto; bottom: 0px; left: 0px; color: transparent; font-size: 18px; padding: 10px 10px 10px 25px; width: 60px; }

h2 .anchor { margin-bottom: -3px; }

h3 .anchor { margin-bottom: -5px; }

h4 .anchor { margin-bottom: -7px; }

h1, h2, h3 { position: relative; padding-left: 60px; margin-left: -60px; }

h1 .anchor:hover, h2 .anchor:hover, h3 .anchor:hover { color: rgb(19, 19, 19); visibility: visible; text-decoration: none; }

.anchor-target { position: absolute; margin-top: -80px; padding-top: 80px; width: 2px; }

.anchor-target-small { margin-top: -40px; padding-top: 40px; }

.section-content .source-link { top: -27px; left: 10px; width: 100px; padding: 15px; color: rgb(153, 153, 153); font-size: 18px; text-align: right; }

.section-content .source-link.active, .section-content .source-link:hover { color: rgb(67, 117, 158); text-decoration: none; }

.section-content .source-link.right { float: right; }

.popover-source { }

.popover-source .glyphicon-new-window { font-size: 12px; padding-left: 6px; }

.popover-source, .popover-source .glyphicon-new-window, .popover-source:hover, .popover-source .glyphicon-new-window:hover { color: rgb(67, 117, 158); }

.popover-source.left { margin-top: 2px; margin-left: 60px; }

.clearfix::before, .clearfix::after { content: " "; display: table; }

.clearfix::after { clear: both; }

.center-block { display: block; margin-left: auto; margin-right: auto; }

.pull-right { float: right !important; }

.pull-left { float: left !important; }

.hide { display: none !important; }

.show { display: block !important; }

.invisible { visibility: hidden; }

.text-hide { font: 0px / 0 a; color: transparent; text-shadow: none; background-color: transparent; border: 0px; }

.hidden { display: none !important; visibility: hidden !important; }

.affix { position: fixed; }

.visible-xs, tr.visible-xs, th.visible-xs, td.visible-xs { display: none !important; }

@media (max-width: 767px) {
  .visible-xs { display: block !important; }
  tr.visible-xs { display: table-row !important; }
  th.visible-xs, td.visible-xs { display: table-cell !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-xs.visible-sm { display: block !important; }
  tr.visible-xs.visible-sm { display: table-row !important; }
  th.visible-xs.visible-sm, td.visible-xs.visible-sm { display: table-cell !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-xs.visible-md { display: block !important; }
  tr.visible-xs.visible-md { display: table-row !important; }
  th.visible-xs.visible-md, td.visible-xs.visible-md { display: table-cell !important; }
}

@media (min-width: 1200px) {
  .visible-xs.visible-lg { display: block !important; }
  tr.visible-xs.visible-lg { display: table-row !important; }
  th.visible-xs.visible-lg, td.visible-xs.visible-lg { display: table-cell !important; }
}

.visible-sm, tr.visible-sm, th.visible-sm, td.visible-sm { display: none !important; }

@media (max-width: 767px) {
  .visible-sm.visible-xs { display: block !important; }
  tr.visible-sm.visible-xs { display: table-row !important; }
  th.visible-sm.visible-xs, td.visible-sm.visible-xs { display: table-cell !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm { display: block !important; }
  tr.visible-sm { display: table-row !important; }
  th.visible-sm, td.visible-sm { display: table-cell !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-sm.visible-md { display: block !important; }
  tr.visible-sm.visible-md { display: table-row !important; }
  th.visible-sm.visible-md, td.visible-sm.visible-md { display: table-cell !important; }
}

@media (min-width: 1200px) {
  .visible-sm.visible-lg { display: block !important; }
  tr.visible-sm.visible-lg { display: table-row !important; }
  th.visible-sm.visible-lg, td.visible-sm.visible-lg { display: table-cell !important; }
}

.visible-md, tr.visible-md, th.visible-md, td.visible-md { display: none !important; }

@media (max-width: 767px) {
  .visible-md.visible-xs { display: block !important; }
  tr.visible-md.visible-xs { display: table-row !important; }
  th.visible-md.visible-xs, td.visible-md.visible-xs { display: table-cell !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-md.visible-sm { display: block !important; }
  tr.visible-md.visible-sm { display: table-row !important; }
  th.visible-md.visible-sm, td.visible-md.visible-sm { display: table-cell !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md { display: block !important; }
  tr.visible-md { display: table-row !important; }
  th.visible-md, td.visible-md { display: table-cell !important; }
}

@media (min-width: 1200px) {
  .visible-md.visible-lg { display: block !important; }
  tr.visible-md.visible-lg { display: table-row !important; }
  th.visible-md.visible-lg, td.visible-md.visible-lg { display: table-cell !important; }
}

.visible-lg, tr.visible-lg, th.visible-lg, td.visible-lg { display: none !important; }

@media (max-width: 767px) {
  .visible-lg.visible-xs { display: block !important; }
  tr.visible-lg.visible-xs { display: table-row !important; }
  th.visible-lg.visible-xs, td.visible-lg.visible-xs { display: table-cell !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-lg.visible-sm { display: block !important; }
  tr.visible-lg.visible-sm { display: table-row !important; }
  th.visible-lg.visible-sm, td.visible-lg.visible-sm { display: table-cell !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-lg.visible-md { display: block !important; }
  tr.visible-lg.visible-md { display: table-row !important; }
  th.visible-lg.visible-md, td.visible-lg.visible-md { display: table-cell !important; }
}

@media (min-width: 1200px) {
  .visible-lg { display: block !important; }
  tr.visible-lg { display: table-row !important; }
  th.visible-lg, td.visible-lg { display: table-cell !important; }
}

.hidden-xs { display: block !important; }

tr.hidden-xs { display: table-row !important; }

th.hidden-xs, td.hidden-xs { display: table-cell !important; }

@media (max-width: 767px) {
  .hidden-xs, tr.hidden-xs, th.hidden-xs, td.hidden-xs { display: none !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .hidden-xs.hidden-sm, tr.hidden-xs.hidden-sm, th.hidden-xs.hidden-sm, td.hidden-xs.hidden-sm { display: none !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-xs.hidden-md, tr.hidden-xs.hidden-md, th.hidden-xs.hidden-md, td.hidden-xs.hidden-md { display: none !important; }
}

@media (min-width: 1200px) {
  .hidden-xs.hidden-lg, tr.hidden-xs.hidden-lg, th.hidden-xs.hidden-lg, td.hidden-xs.hidden-lg { display: none !important; }
}

.hidden-sm { display: block !important; }

tr.hidden-sm { display: table-row !important; }

th.hidden-sm, td.hidden-sm { display: table-cell !important; }

@media (max-width: 767px) {
  .hidden-sm.hidden-xs, tr.hidden-sm.hidden-xs, th.hidden-sm.hidden-xs, td.hidden-sm.hidden-xs { display: none !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .hidden-sm, tr.hidden-sm, th.hidden-sm, td.hidden-sm { display: none !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-sm.hidden-md, tr.hidden-sm.hidden-md, th.hidden-sm.hidden-md, td.hidden-sm.hidden-md { display: none !important; }
}

@media (min-width: 1200px) {
  .hidden-sm.hidden-lg, tr.hidden-sm.hidden-lg, th.hidden-sm.hidden-lg, td.hidden-sm.hidden-lg { display: none !important; }
}

.hidden-md { display: block !important; }

tr.hidden-md { display: table-row !important; }

th.hidden-md, td.hidden-md { display: table-cell !important; }

@media (max-width: 767px) {
  .hidden-md.hidden-xs, tr.hidden-md.hidden-xs, th.hidden-md.hidden-xs, td.hidden-md.hidden-xs { display: none !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .hidden-md.hidden-sm, tr.hidden-md.hidden-sm, th.hidden-md.hidden-sm, td.hidden-md.hidden-sm { display: none !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-md, tr.hidden-md, th.hidden-md, td.hidden-md { display: none !important; }
}

@media (min-width: 1200px) {
  .hidden-md.hidden-lg, tr.hidden-md.hidden-lg, th.hidden-md.hidden-lg, td.hidden-md.hidden-lg { display: none !important; }
}

.hidden-lg { display: block !important; }

tr.hidden-lg { display: table-row !important; }

th.hidden-lg, td.hidden-lg { display: table-cell !important; }

@media (max-width: 767px) {
  .hidden-lg.hidden-xs, tr.hidden-lg.hidden-xs, th.hidden-lg.hidden-xs, td.hidden-lg.hidden-xs { display: none !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .hidden-lg.hidden-sm, tr.hidden-lg.hidden-sm, th.hidden-lg.hidden-sm, td.hidden-lg.hidden-sm { display: none !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-lg.hidden-md, tr.hidden-lg.hidden-md, th.hidden-lg.hidden-md, td.hidden-lg.hidden-md { display: none !important; }
}

@media (min-width: 1200px) {
  .hidden-lg, tr.hidden-lg, th.hidden-lg, td.hidden-lg { display: none !important; }
}

.visible-print, tr.visible-print, th.visible-print, td.visible-print { display: none !important; }

@media print {
  .visible-print { display: block !important; }
  tr.visible-print { display: table-row !important; }
  th.visible-print, td.visible-print { display: table-cell !important; }
  .hidden-print, tr.hidden-print, th.hidden-print, td.hidden-print { display: none !important; }
}
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: image/png
Content-Transfer-Encoding: binary
Content-Location: https://lesscss.org/public/img/less_logo.png

�PNG

   IHDR     �   �|�   tEXtSoftware Adobe ImageReadyq�e<  mPIDATx��]`E~�w	5`�T@�JS��Ti� ]�BA�PĮtl)@��REE�b� �(% ؐ��z���ٙݹ�]r}�����#$�ofg�y@@@@@@@@@@@@@@@@@@@@@@@@�r����b�Y/��Ej���uX���#��3+�WA""����:,�y&      K�v��~-s�N���hיC'��S%�^;�υ%B@@ ��4~�Op[�mX��m�+d����n��8��&J*�KA��Q�E�axtE��Z���=I$-��X�Ty�Ģ�U�oW�W���m(N	m���ɲ婂��������<&�%
w�c�!����k#f�qO �w�^�����5j�h�~�W^���l�RE��f%%���1���)�L���kYV9��C,   �7��\�	NUj�\�<u������:�p8������]�:55�������w���K��($d��H��{�}���
Q��7߬Ѽy�����2�K�nl�ۓ�)R=�_�����Lה�XLcXm:�P���p:�t�)��%J���+V$_۵kcǎ����Ԝ���������߳;w�<��������*l�V%�#����QG*�N ��Ov�.�=Xt_�̙3k�hѢM�r��'%%�d�ْb�u�������X$:��T&aKPtJ� 1N�`���g^d�d��w$$$T@A�Q�L�^�:<��Cp���ߏ?~�СC���鳞�Fdq�!׃�Br�R8��-O"�4�v��}w�J��]~��dY.�/L��,�'�6��
��:�`�!,�`��1NG.!��2"��=���u�v�ݻ�k���7����4X��"��w;�F�&pV��x��K/]�2��e˖��n�'��뒗K�\���n���S	�q�!�5�C�i�m\}��-P��s�έ|�WV͞=��kd5��ug���L:��'���Ͱc��#�T)I岡C��<}���_|����'�<�EY6��p��۩	�O�o
��D�롹� Z���탳f���СC��v�ZG��ZU��r����;�&XQwN}뭷*�����M���\�r�+㉠
�    �C+��U�V�s�ʕ�?~�� \.�l��ۂ�2���:�ĉ�+V�8L���0���� ��!  o롕R�]w]�7�|�Y�=�7m�t%Y�T��Ȥ�diIw��,�\�䁙qJ�Rz�̙.]��J���$Mt�L�xo�"DH,	x�̊���&M�=s�̌[n����QYU����J	n��E��walڴ鮁�/V�XU�be˖��}����vC4޿�.ƨl`�*F������^��T1�|�F4\a��k`��%J��f�ԩ�F����=�͗�kK�3�$�E�ؽ`�C��;wvQ��8�F��@R
���۟��<�?~�䌌��gϞ}�~��\��2�-�9sf��     HLL,1nܸ�jԨQ"Z�Y���Gau�u�ҥ�#�<2ML'�x�W\q��ի�F��T�WZ�V��B����%�.\�p���ʋ�$    o�R�J��_�7Q�
��Y/(�m?�;����F%K�l#�P��\B�Q^�w�����>� �� sL
{[����[�$ D<�ӵ����X�,� }�ƍ�D���20J_c��TL��,o'�~��w�}��|i�%aH H���@|��(^�4h�n���5u�o�j��y����2.�v����?��E�!B�Ě�t��WL�6�6+ߣu $�w�내�ꪫZB}(�Z@@@ ��O4�lٲ��e3h.D�o��~jʣF��g^0Q�o߾w��/     `�f͚5*W�\�핪$�Q��t�%\�˗�[LW�=��U��L�^��hѢ��4	 �FG-W����k�xY]���x��o��F�˷��)sצv�4�*��aÆ��6��N����0T,_�U��.f}�Aq��ĢF��tRɨy�n��G�����<nA���-��y�Я�m��p��1B�ڕ�jw��a����U@@@�B8�k*�����L#v�eA�J*5�V��ժ@-�k���X� ���t�M7�T�ȑ#��vo���.^�xkY�����`��ۉ��;I#w���y��$�ě*   `��B��U��C�$�յ;�-���^�̅�a@2ѳKk���.(�d��V�;w�~ʔ)G@��`���&��w�4=��hѢ� �/��g�@����܏VC��@�%�/����H���l���"�A@@ ���d"�ͦ����sM=/L~nk���Zd��iٲ%�1�FFk�垑1w��.+T�DW��C_�Sg��cC�z�� �_�Y�����2�c⶞?텨���$�� �<t��IH����(d["a��U٫l�7��N��#����JR�iz��/�,iۛb+����ڑ���y�Nc�TpmW���;<
������O0���U�VU��	�n����X��"���F��h*�x��Lw_<����v��	EtaK(�J1J�ć���#��F8,̶�F�z� P�p��8��9\K�`�D�3a����������1�y�N'>i:���`�C䁫�""���^�z�����v��eVtlW,|�W��?o
��(,   �U�_=_�λ~>u��ѱ%��0W\q��V�s\�0�,\�[�m����UNԮտ��+�y!Q+	��DmD3N�8�A��v-���a+dEt:@�9\�Ԍ,',]�<ҳ�)Os�e�]N�koY��ň[q!�"��j��~ Q��@�T� 'h�Ky�dc\8_�Si���F�F�&��Aq�Nts�8w,]�i���F X_F "9^�׺����L@@@@�'����:sN(BX  ����ֈ�
󅙫�%�[��/�`�lܕ��D���� ]�B���pO`Vj��u���G�kͺy�����$D$���Z�2Ze�v���o
s!��1����ZA���"y`n���lZ���GNX�$+���x�FX<J@@@@@�W��r\(�C\Z ��a��oH�0
)��m�X
��_�z�@`�I�(�ƃ�-�h�{�B*!#����ݮ���R8ĥS8Gܺ0g���0�_K^>��?V����m�ū���c�c'���72�l$�r��@ú7� �\�R)�eb�G$��U�צ=�R��K�?�b"�����x�,Yt��f���/,�Sb������{����_��[!� ����î�#���JD�	��J�M��^䚫� ��K��
_,���g++X��S��z��M��߹~,mM��X�x�?Dp,ľ - �Z<�7MIb�Xts�>�W�8�è]�(�����J��U���ޤ^�̕D�a�G��S��g�����p��S^�aÙ<q�I�t�V��5�q3�F��x0�0F�h�R�J2�N*��.U�X�����p!�#���4D�؅X��>$�����w]�c�="�NQ�tt�.�Hj���![AA��௩daąr�G�״�Lp����xn�7���q#�V�<4R�Z��A��?`ďmh)GO��Kp,�0v�Fw+��_B(�Ͼ��Xz�����>h�l�1\����}���X�#�x�@q��D�7�*N'9Ui�y����ȅ��ԶehX�J�6#�dV�H릵a���T���?���w���j�-�
Ѱ��|�m�ɜ%�;�Z�$��X���d'Z�TN�G�;��4�S�D�7�}�n2�Iz�hi±;p�l߳R���ϱ��νavs��D��hsG=K��o�O9���_�?�[��ױ��_����a!�MRd�F �o�%`.y��p�i�*ihP�2toߔ,��IYx�Cy�۝�����6�/����#�.�3�P*vצn�Tk"�6�|��<��ǣuӺd�����Ɠ�Sg���ߧ���)�q�p13����q�"Ln���ֶ!��zU-�~��|wP������(���չ�{G�8	���m,�0�9A �c���9.r5��F�����RI%�GǖD�D�l�Vx�/ �R��s�
&Y���q��F�v��~�%��z��c�H9z��Z�;��BaZ/\��N��nV;*HCa�N��a�߹�0,۰C��i��#�@ā�E�J��Lk�-�Z1Y���BSg��M��UѰnU�޶��M���v�^#�Bd��m�����˟�$�*�B�l�64sL�\chr�S�3/��o��5U	č1�lԸ�"�x�7�F���K7��ov��c�����B>���($�G����]c_��<ܣ5���� �|���ni����-FZ1(�/����h�d+���@�����7��鮊�T����F*��%toׄ�܏>���~B/�/5|�v�Fl�9fX7w5�;��q�e��r3�8�T�19��-��_֓�ٗ~��J
�{qQq)ⲱ�j������D������"r������3ب����K��QǢ�v��iJ&d��o{��_@��\ �?���m��9�og�ٹL���]�&��)W�ԑ}EI_��� ��3���|K�}�υ��#>?�!��7W�i���^��/! D�V�4*��
�f@��~3�ZQY��`�,Z�_ˈ��Y��}���㞖0��p�h*=p:H �K�
+.��pdj(��!��Y���}w������}S/n���m�7�.�Sg�i�:vx2����8����wԃ���	�{x�X��ҵ[`��ߐl�
�l;@�'H��߇5V ~	���_��7[�����$�XL��b��.���ds����c��7V�˗����æES�����܏?S�cĂ��B}�d3bQ���� �B��s'%K��c�6w�+g! 1!�������`lZ\��ѨI�I�/<��wh&\��p�;��C������B.X����qn�(�FA���Bȳ�}���C��R�n�T���G��m5a�+s =ˑo�X�1���6(*2_���_��	|���Fk�'o=ij�hÁÿ�rL��bmA Le|1(�,��������>���z�жeCH�P��8�r.L�%��y�Z&@
��	o6����P�RY�y	��X�j#q��.'���"�I�Kg���W��7덥{D/D�$��"N�?.��v��.�%o���0em����e���aHn�*�D0_׭��@I-ڟ���H��*d�>Rl^~�B�EX��[��ƇfP06B��źM��qDz����@�x���ҳDF��t�3d����I%`ռIP�j%s�O��=���_nZ�H��$_m������! ��ϣ�Y"b}Ђ���u����Ʉ�ׄO�~2�+�E�D��U�+�37��u�?Sݢ����g+]����i]K���",^�Q�3#=wP0 V/ƹ���H�?�n���7Ja��~
� D���@>��g	�(��D��`���&��O�)t����J"9Y�\"��l"
qgp�rǉ�1^xw�cb�
'O��m�~�6(��ũ�BR�M���/x���D�dX������)~���@ĎI+z�������[�%�TI���7�f��a'�cШ^5�� �nӖBև��ߦy=����g�:HKKX��}!��Ʉ�LjA�Z$��O��	��>�)H*�H]Y���2�ε�C�,x����r�@��K���E���j��e�
�D�#���_����~@(1(����B�:�A�$g�I^�<,{g�p[�5n�o�:Bs]�%��t�E��>
J������a�C��q��Q8u���I�O�﮵�6�������(\H����'���G�@XHޟ<BD���[5��C��Će�ִ,�X�r}����>|_k�Ġ��N(A�p�=Q<^������=G ��{����Hr4˾;n��^&�|�A�q�Z�"��\��3�8?O\Ƌw3����:��u_n�N�6��.�֌�!q��NB�Abɪ��hޅ?e(M]譋8n��Q�tn����|k]�`O�H����{`EpX�x����ֈ��Rϒ�'կ�hڠ.�ڄ~�L{	Z�;�.�l� a*'9عF\n����Ss3!�_s�e'�]HK���~��}M�12c��<�<}N{�H �>�2.t�?��KK���1��غ����_�:V��%cٖ|Y�-��!�����G��b����B�m�>�3-���ʒ����� �f#����̐~���YA��G{�c�S��-d|0�������7�du�*�/K�kV�1l�F��D��,��ۯ��`���P�T�$���V�*P���d,`�G�@�f�a�-r�9�^��R���
.�Z �L��k��Գ��'�~Ed�S�׽�g����ڦ>������U�б� ��P�����`�l\�z�l���Z7�c�)�,�Y��<G�:I34���������G��!D���u��m�@MR�3⫭F�u�J�]�?�������=̍}@"��#��`({GHQI�@{�n��߰y��8B�C��%+7��<)Dhv?/����V{�`�4�c��ݠB�+,B���i���9����Xh��P}��&X��hr�-����ԅ��i�9n�`��ѿ�h�Ar&�Ϩx2����7&�������`��et\h�)��`�Գ��M-������[��]����I��@�YZz���LV��7<��묙�O�T�#�^%ٴ���������)��'�_�!�g���owg#�=���1D�h59u�\�������@���*$V ��jT���)���}�m��Y
k�+��m��]����qc���Mn�=�mK?���>�ѦY=�ƨ��g������-��%�����lL�\ڷj泻c�K����AIm�0'��[�>C���о#��?-�"�}0�_�b����wm���B�fQOE�ْ��+�u�BQ2o��{��s;h�d^�1�Q�'����y f���Ɵ���s���2�-��or`�G���3^RO��F����>Y��ޏ����->��{D�e�42!����iu�3�3�Ա�LͲ��6偌K�sXq��Ng.l�v/�aϽ=����w5%'�6���������1�k����5��F��W_����	����Մ�����.����*D�J��)
QZ�@�O*�BAtZm>�ߩE���s��.�c�MS��bB�5��oT7o��3b�����e��j������]���S�f�*}��r��}[��L�9�}b<u3��Tr}taDCF�'&s~,䄢D��06���������e1/�e���]Z�҆��߼h\�h�y��]��ޅi�=��J�i.#�^�~�yGB���xn�,�D�����/��1(�G�~ѿ(Z�Z�B�
��?��>������]L%�z?�W��a����S*;�FNّ��!��?��+��2�B�����Eé3ga��^�>0t�$ض�G�@��wD:�Y&�g�;����1�ÕD���AH�N H��9�I8��x�@Haa�3!77�&8\���qͅ�w�ӴRՄ<�
~��%�O$h�N$	\��q������*zjbߡu�t��N?��I�~)��6��Qw���ܻt�.#�fddȊn��gI.y�)���Q�nu��6z��|�@N��O�\Q���>�� a9)#P��|��$@=Z���N"�y�;K�~����c��n�J \�qF��n
�	��w�xv|��:����� c����@HnG DgԒ��N*�`j	^B�n�}��8�ʥ/.v.�ܿ�.W뿱�V��oR	F��?�%ؼbVD��~{\T����G�͎>�60-ڈ�ǘF �x��L��-#�8*�|VoB7��>�j$����n�����ST�r�.ݘ�c���'�&pH�1��pU��O,f\ی��Y�
����?���~���H\u�UE�vO��0ʕ+W���l��̱>�5�[��;nzD'fd���D�@l۹O�0��ǣB	Q�:uꔱ�=Eڅ���U�)���g�Ó?��V�U�����?K0����� f<ң�)O��\b�����zafpW�au ����z�
R�Ϧ'!��1'�~�)thݜ͉�/<?q##�Rb���p�Ez�5��$�r�����"��/�FJ��~�]�������~j�a��C��G��t����G���,�A�tK�\ ��#�Կ?7����ܗ����"�Q����2���r I�&���[��d�ȳ�����ٽCsS�,�B�n-���A ��.�h!�jU.ރħ�IܜQ`ʬE�*��G�V�~fh�����t�����,��W6$�v�;I��=a_��?�V�I������F��`Tb�%F�+a���D��I��_���?����Ē����|���k�����VS�4��0�v�Y�{��c�� ���Z������?f׏�hc�s?����TQXlt�tR�=l��3��zG����0����5{��2�͌��ڪ�Fr��q��P�C��2vU�T�,�HƔ��!�M�۷�i��2@ p{c�իT0����]����尣��F#��ۂDe�S�#��P�lI�_��l�4Mvos?�,�z²���t䪒C��2XD;�DDx�<蘒�1�3��b��m�4�e.��, f>g-���{�	���W�^�@����^Z�J��riD�@H���CV�T�V���aCǳ���#qfP��8ito�ؔ����������ā.,$�A�ܥ���=,&�5�a���-[$B���S��(���hW"O ����?֫��i������ML�7.�a>g��l@���D�������/�����ׯ�Gm�\v�����_~y+�~w$�XF�M#�;�����?���;m�/C�([	xnڠ�xyLD���J��0�wׯ_���t.�[t��*�VtӦM�eY6��5���� ��V@��Y/���Ni�lF���j�I���O�)��t�2#���{���{K��\[��X!�k+����E+G���7���{pr.�V� ]�1߬	c^I��2�������\�e,�I�q�*:��Zm�P�!XWO��¸�k�{��]�ZJ�R�
^���a7�a�mA�護������e�^����h�b��|�EѲ/�4�S5⏊�Z	[I�5��?ۍk�f�$������is�>�3�a���<m6�2#N�8�3yѵ2���:y06-�>�47��W��u]�LT��3��X���!�h3�<=͗������H���"P�EI�=��ߐf�cذawq����H���)�.�y��տ��L+ �հ/,f��q^D����mZD>������`}���=�#Mtw����j�f`ܘ!�:=c�x+D��m<�!ѐ�a�x��wش�kР��͚5��
�O���E���Y�gf��ﾻ\�^�^2��n��i����pr٫#O 6}gDbs�ײlX m���aD��F���H����+��<��߀���<����u^w*��iE��H�����	���������I�%C�?��a���m�f���1������g�uQn���kp�'	�Z!��D� ��eɒ%�)RĴ<�������̖��Q�j�����?�B�iMwP��������������f@�D�j7y6?�h�`x�����룠�5���*K%T��E��N#��%vC��I�3��O�+��*�׈Cvmh�3�ӿ3���·u]�D%�֭kO�OP��whw;�F�Z8#��h۶m�ٳg�]q�w��t��sXv�Xe?5�@`�EZZz����I9r�$����̼vD�;���߁��⪚*�s��х�#'M����ͪ�0m��P:�����l�m�O�7���3w���fރ��H�{�NI*I`D�b��+QfϞ]Ŋ����f�"��KQ���{����"ܿբ�5iT��?���Z ��2Z�����7u�a���M�f���B��m�@������������B�"�qVO�N4��Oź��I�i���jP�?��~vZ@�l�g��ȕ��2Υ�iX��]���~DW�����ɧ_�>f�>�h�-[���^��5l�U�
N.���e��\���l�.��<<�9d�F�D�ΙG�rf�R��]ޢE��RRRF8pU��ū��h$��.K=�\��9�/��|n���ծ��Q^���͕���� �/s�)雤��$�V�&����W,# ��9��Z *�薾���ļvw�B"1�>صf6�4����$��>K��l]ps��q�d(.��J������8OD�������Û/>�.��:��(׿��%yy��@|�Μ3}̚5kv׮]�&-\���y`�',k#	\c&<�<
us�܅1��j�Ν{��/��LeE��bLz�=f�?�?t$���Z5ܛB��~��[N?�����n� �~e4�_=fߩ�@�Ht���b�|o�mq�X�<`�;�,q%K���o߾���ӧo޼��c�=V.����(��	��3�P3m�%�|��͛7�Aŭ%J�h���P�j�������V�Gvi���R�q�ZE �to�-��P�*S��d��5w�gt�ާ�z���y�Я��&���v�����"At���)*��	�q�u�\�{tlI�F�]��4%K#]%��ͬ���X�k�vv͞٣�դw���ݸ�{hsG}K��5�`ѫ���%�7E���d�;k=O�מ��n�g��5%+��hѢ�c(�'O>����ڷo�ϫV�:�`��?�ɗ�J.��(^� *���A��}��
!�(űc�n��ʺ���#��/���k�o��˓����D!I%7Y}��m1k�'zKW�����jfQ7�MX�Ջ�7ʧ��l���jQ�V�=�F˦��v㼰t�7��Xz�ո�zx�!��S�����܅�	�!뒺�+v�0CGRX�j;�Z��εb7�pr���J p��9��d���mؼ;z���pɲ~�F�Ğ��ކ��f����%99:w��8}�41w=z�ݮ=�J0v]v�e�@+V,���ÿ�����00Ґő�<�@��u�]7�f�5����BZ:�8��eB��_'��hҠ-����fy��.��]ZA��܅��'�}�����ܐ_ѯPw�U����O�R	薨�0��j�Z�p��|�������M����ĉ�T1͗���� ݽ�����g_{���J��LY��Y$oj�ՠ|
�kAH�jZ ��tJ����p����c'�D3H�2 )��HMz�[wF�!��A{h�aymMY�N�IL����&$��^5@������.X�y'�gh�x�:+-N�w_�S��D���H�WI��Ģ��c}�N�O�Md���Ͼ����x��x���Ժ�����w>&�N�vK����7Y&��I-�<�}K6P�saH�(�t:���>d�k�x�zmr�l�$f���t׆�î[ṔY�Sxc �g6�{��/0M'%�aِ��H����c���f<8�{��"$~Zol�-�wA�/����:��#<�6���[/?K>���Ab���^)���:W���6}cЗðU3U���{��~�)�ו��]hT�:�?�7P���ւ��q���H�|�UX��$�Y�RT��ϟ�l�
��E\t#@Ƀ�[ b
C�yE'���0z��4 �>9��Z��l}���Y#"K jU/<\	�?Q7����9�5P��3��5��{��B�Yk��/����G�Iu�hCym�@b��׃����:������z�T�U�ƸX�=ea�E��(Bl�Ա�cp��Q���v�*6�P�e��r~z)`����Yq�@�hڰ�`μFA0݊��#٤O�S�cR�!���h�D0���}��2.r'H3�\+x�=����eУKk�D��B���ӂ�-KV}a���1A� ��X�^I�ީ������'a�;�֝�����n����	�(�t3���T�t:�Q���O��{���u���+Ƀ�@E��H��D�`ж��	l±YEQ�>��҆H\_	���"�~)�D��"0 ����u���C���}2�BIN���U�B��v��be��Ͽ�������>"�opKeS�0�p�qcO�SM����30�Õ�N �bSE(�`�*���JLz�]��k�:�G�sW���ܳjit�o�(���/����1�-��n�j�X��D���N/:1�|��??�g!�u�w�<��?�u?�ߏ?�C,�
o�0���k�i~/L�>_�Ȉ�	�š)������I#XǏ@��QB�c���u�U<�*YL���<�ZL
H��=c鹉s����b^-hf~��a���w�w@	������K7Ӷ֤d3f 9��z��@�s��f�_�Ôw>&Y1���@��<�z�[���%���f��Vmn��=h��]P�Uo��5K���6H�zaD�8T�A��c�!p��_�<$�J \�0q���V}|�{C�6�4��P�}�.����H��� ��C(�ۼ5�����J�edA��#�D������F6v��#�
%ԥ����qÞn}�{���,x�?~}~Ҝ��)�L-���G�A������=t�!.sti���g�@�~���b!J��@ qx�闡�]`�-!0��XB,U��\�Z����*~�*W����ƍvX3��W̄���YW��x���/�����8�|�1E�$�S�a�U׍D� ��W�v�.�x�:��H����$��b��)��|Ђ]$M<r4�@���Ƿ�Fs!�b�D(�Y���}rB"�9�&6BN�#�\�&^_.�����Cr/�'�,*9�0�&y���v־���������	H$��v����n���5_>�����}� }?J(��Sۿ?H����(�5�4�X��7pO�ApK�N�x�Z�d�"�Ql	� %�$�$b>b$���=��~m0z�gᾈ=x(�������x����7`����ü�GCI�/,k���}>`��~N������K$�1ސ\�j��泰��נ��%à�P�G������ܛ�=Iߧ���k������p}��a�Է9q��?�@��8 i�3�غ�{0�~����¤i���󷻫11�c�������n,G�{v��z�;�Rg̽[i���˯�r���/k׮��h"�$Z����~k�̆���U�x+c�<�.�Z�퐯�C�4��!����\���U��+���'����E�H�|Z�)3?�.�?E�V�Ь�`�0���dY���г�d���ք���L�#_􏍫�PQ�W��+[�|o|X����G�����U�T)xr���?�}���ݮ��+��6�OJ��c���0�G�b�r�@��%�]K��X� Co�۵�CA��gE�b�Cx�岱�$�.B#����W����h�u �^�<.�ض���ղiP�RYcC�60�/�ħz[�w��=	-�����ǥ��Z�n��Ʀ�H���dp܄KZ�7i���:0s�p��/`«/�M�!*���¨a���.�F�����9HK�c�M�N���������W,_>[�6���ƴ{�4}4��08�k�Y#J�4]���G����3aռI�����q�ʈBT:*�*�������$��.�
�%��IZ@�3XM�'�E�~2.Aa�����o�&����I��&6}�3��"Ys0�O<�P��ђG����б3���A0v�̸�?�?mܓ!���œ̵<=C���`��3�헇F}�Ψ&XEn����!��ͅDh����6�,:7��Q�#$.���%���K�Ӕ��e�A1]��&6a���=M���Q��bH2.���]����7.�=�����g�(\�:���%R�r9X>�%��<V����`x汾�j��qs%/��u4���mR��3
�g���:}5���_�bm\i���:��a�h�	L�h��<}^����gð��;^���S��E���5bR�1S�f��$_�DX��}ɨ��k�Q����@�{}�pm��V��>����,�A^��=�5�\�<��I=�/)�[��}�x���Q��!@�έH�e��;U/����}�����Dtm��"���d�B{D�_����U*N m�c1UU	멿��p���*��:��@8��ͽ0 �$L@A�ޞQ�Σ�=�|a(|ns��2ׯ�4��YZ�!�����D��F�0��pa���BGy����6@��O(�_�~{�4탸����A��w�L���"��S�w4�}#,�Y�qcŘ�wL�e�1i������5�v��I<��M�{��~fi`��wt�g_}����e|4{in�z��}��b0���g^���Ĵ��??jU��h�}�=�a�ܗ�a6`���>~$a��	�8va����=؟mx8���*�*�������^;�w��ݘWޠc'����X
�6�X����oM6}|}kk/�2ؿU��-��˂B8�y��Ü�V��W@����$�=�o�4洍�x����l���&��e��_�ٗ�x�дA]����Ыk������Тˣ!�?����$���yx���r��3�k�{��1�qc����SH��X,5J߀�#�^Ct�pd��Xr�/[�`��4�� �@�6�TO�<��T<�1�pr��'6�,��m�>.�N��I�g���}��Hr�kT�D%��16���&���Z�m��_��AչB��H�A�or�����O��q�ɽz�{L�c���
��/���mR�� B0�!F��
G�nf-�tg)d�3'?/v�(+c.���\�wz��� ̚�I̸��
au���F+-�v�nD���b9�?�R%K�ʹ/����n�p��W�d����r]�v���n�*33�XVVV�����Xݺu˕P���\�t��W%%%]e��F�N��3h4
�B�r)[7�}�Kz���"d���8��2w�gFPfu��	��>3L��������K���J�B%�1���H����/'Z�l�s<:�5;���<7a&�����Z&�X�3>��k�نdޅ��'2�?��y]�Mn�Ct���M8\H��2���v)�Y��^1��g��������ReYv~���8��۷���͛���tU2�5*0��	��dN{%� ������Y.�U�TIz�Gnjذa��*.��˭�8<��mٝ|%�WTA�h��I���H� ��y9�Y=5�[ğ�S���I�HI�)A7�D}�5R��#N�%�t�w�����s�P��6v4Ҝ<#g���Gp��𸄸�$E���
7�X�>���\!f�����M�g׶0���H9�h�����C_gX�������]M5GZ1��n˞$�#x��ՊD�B���a�,kZ����߷nݚ���ߧΘ1�%ټ���铹-28�'�����ѣG�آE���_~��=z��s���TX���$R~��+R�f�'���}��u���â�k��
�����E���(��A��=V�$��������G�o��=������믿~܍7��A����Q����^���m�����Wă"��n�X�t鿪�T�R��˗w�[�nc+(v��a�KT&��#���l )����H0����5-#Ӕ[(�L�7F�M�&p�\��5&Y�@�Gr�Yz��~��W�M���2}����e���<���Abq�rͽ�u�A�;�utl���\N.#@
AF@���菏�H����v|�;q�X�,�%փҿ�[ а��P��,��y=s���kF����\*�fu�-
��x��g��,�'(�@��\7B��;G ���pĢ4���L���o���՛�>О���(Z�h1�����/��g��=�M�_$���2�f��r���E����i�u�������2�����
��ǠJ�S(�云��W)⣍���w�M��il`F��.ą��1y�<�yo[ҥ��Y���蛱��Ku"����lQ����,���_۩k���&�ZV�5�V��2W�z$��]B]?���F|�O?�t�s���N�8�LC�ѳ��%�4�q��X�o
G򸟙�@�����o�V��ĳgϞ1[у���GHK� iT�PF(_�#�Xu�w�����֝�,y���YL�ݦ�c��D�k��ֲ�������&۶l`�sm߾��:u�,VɃ)!����s@��#�c-Lr��Lz�r�2�lz�����,��={6��l�f)�ګ�$NZ�%���\g��}(0��� %QY�a.��|Wğg��up��"��06풡p��y��ٲq��i�[���"�<1�Y
ua؀�� ě�qqs��{`$օҦ�WH�'+��d�"Q���w���=X����*���Y$���o���4XU&��\vړG�܅ѩ��k�"�������J�*㜕�+>���n���;�nm��j�3a�a�ƍ�����oq�=��?����?_�_/��:���lκ྿g�=���y�V`Jv3a89�E>���3��
�Q���P�����{�����_|��fO$4��U��N���6�S\�M���� 4M��u�/�#�d��(U�8mT�KDq�i�j�D�p�����GvmE{=�F%ۊh�m��kB��KhR��KKk�tؾ7:�N2��:j���:�Y�kc?�ȯ?�|�2�c#�~�=�e����2�oJ��@���Կ�����%{�굖;�_�����`�/�������E.r ���@(�<�8q�ݻw�5w"�[�����H"ҾV��)G��3n끏�̨�/$�-�}_�Ϸ��W�����޲Dր1�e�tm�4���l#8���U7�yƌ�����g:�ލ�.�ur���8�F&e,�Z�/dCQ����[f�תVbf�e0��?��&��L�r뀺ۨ�ba(h&�m��]v�D��5�a�a^�.\�;��m�4�}�tdK������P�EwX��V��O�Z~�߸f�7+��
J%7�9~S1gΜ_��!�ʿ�>�7��^���L/����tsUx��D�8��V���P����@�wӦM�SRRL���I��H���TVi�g����a��^G������f~xfZg�<�FV����'�y��@�~#`���>�4���.�^��٤���k�������Ō3�f͚�ܡ��߲}�/"�ۯ�}��xT�)��˖-�����[!�a�V-c�{3~���SL��T�P.J�B 2sۿqǖ�f�j���(ZOB��1��7����7_o�]b��'�xb�U�&�P�<[�-���^������i���II��SR�r��/���i'��n#��>����{^;L ����`�1�	�8� (VG�Ĕ(��Z�j�- �HV�� ������ �DR���_Mڣ<�����1��9V��� ._��a,]�<�EJJ��`dI�z��H��f�Y��9��5O.�@\��bZ9{��in�Ҹ�'�]�2�{���%�R�~�*��b�&s ���g��Ԙ��D췱O��o蛗lE�����!&x4��~�U�IX78��:f�)WK�J�_����	i�6l��G,풥i���������L�����?�7�wת�@J�pO�� FQ����}]�*�����,�Z�9�G��'��ڴ�������.�I �a��y���������Qm���&��|,c���� bԵpiu;{����j�)�<�wR�Kq�΁(��=~FE���L��$���&�����g��u_m��	�tR!��֟����U,��+��
�,r������%0�Y!�l����##r�rFM',u$�#@TC�Ǫ� ���Ğ���hIg�T��&L�lr{R��r-���o��_^֫���ZQ֛@ ������
}E����ɳܡ�U�f��bd��zLma���z�,�j��U��MyV�����搦�����
�p�l�P��x�����@��#G�X�W.Gh�xrg���榛5{�X�V�3m� ֬V�X�O�N�4��k�C�B���im�%-�z��;ͱB4�O��ּ�<�C�ȗ��مD�HD������`?2m��ߟ����b��7%v��������/���ՔJdr�-�;������㿡MF�����<
����k��Qz�K�m���G���2͜4�J%�<+~%�|,��:(����,X��3���&qő�Q�^ZIg��m,bL�ѹ�G!v���'զ/��1E bf�@��}����n���H�9y��xA�o��� 	D�����@��(��Q�1����r�)��������R���P��|�|Y�)�|l�Pt����}������đM]�[���P�S)�.�X^��%��;����mVB�ӭY�?7σEKD����g|ӿ#>�o4���C^����i`jޟyO"����9ZS��y*�H�0�1Z�n�p�P��DH�'�I�)M|1'<?��v�A �r8W�Ѳ�:�!l�1
h�$I��[7�C�c_4��8t��\q��V�'�zt���E�1��-�#����9wdl�?�����®]�.ģ"�V�e��P�6-�,'�ug/Xj�-�5�m1��Ҍ��׀s_�yo������O�������`Wt�E�@�*x{z`����2����[3�{�=��hѢ�ѫ��&}�����Bh���J9��3�E�n���z�Y�������|��m�y��"�J^��3�j�{pU��(��4�s�J^"�$Q�RYp�d�ϝED���k9�7���4�{3<��=��T�v��Edp�\"���4Dw�`Z�Т���	�{ѳk���mm�_$c>*y9���=��O=�=��߾U��ߊ�-d&������@�-^���"�C�6���0R~�ݴ�5�(U��a�v8� ��NŐ@��&4H,=KI}��K�4�BI�D������jM}%�*�>�D��C0��n]hꞓ�)LFj���8�Q�û��ā�Q�j�f�n09Y����z�x���<I*^��l9�����w�|�k(U)pd_"B~�N�r�{�u��5�Y�����FD׊k�V*x���g����o^��P8>�4�W��� M�o��DL����D��p�B�˚/��ё��"J���}��L$�4���>o�z���
�
K$"	>_4=�͏1UL�c��C��-`�{�`���m�<~���	�YjU������~ؼfLMn�����5��J�u$�u���g�R%���ǡ�?��j�'v��ogH.w�9���OׂA0��ܥeY6q$
��!�0I�����}�S�]#Ӟ2�Cpb�'w�(�4!�+q�t$�v<�Љ�E��4S$Ӄ���.^�����+�k�J��f����qc�B�u��ѓ �n�"�YI�z�����{��B�o�i\`{t����\�.����F���ιj�^���)U@�b4���:s�.\k�����K�Jv�O�#��dK�����חF��5+s�]�K�Ӄ{G|N�?����4��Їv�5�z(D����m��-�Z�W��"<a�#p�=���Z����oJ�&A 
�i�:�Q<�ۄS	��)����'��+��q��eG���]�D����K{p�� �;��`m���`9��CK��.�v�����G��ؾU3���*����/sy_� �D"��J�:�%���۶�ڶ�����?T�2P�DQ=H�s�D��Ը��B��WG$�m׏��庯�B��;��ӧ�4�]q�#�s9�:wR"� 7��_2�\�ŷ:Y5��?mr�k|�?��Q�t>6�Z��VH=�o�������xӿ��Ĝ�V���1̶B ����g����gXf,��ֈ�Y�9_�>��:���_{�ͅ�_}�o��P�F�E�|�r�@���؞5�j�S����]ˆ�z���g^h��7�@?u�.�q�>��^_��E�_�j%���L����G|������ew��1����M�7�T_���?!�HgL��x�,\[w�#A���IN�����*.'	��;Ic�\���h���w��Y=�/%�x�d"�G]L�4�|����U!�bf�z�������U���cLA��B:W�Gȶ�?꿗�:�;�ݬel�+2q[m"��@2��o�E�cݦ�_ǝ�®s���T<^�Xă&�~�@���kf	H.8��Y�2�l���%���}�Ϙ�6bX�|��G�+ޞ\�A �N���M|�|�$��o�m��>�eO���H�ѥq�����/ώ�)��5�%����pqK.{5yPl���	|�t5�	ޜ���}u�~���O�@Y��V"�U������6P$�߀������^E�x:D��}�NaHL���k��v_���1�5t:���H����pC۶�g�n'���C�sܼ*�z�ٹ�)�<0}s��o��[��͛7���z�M��W��k@$��4Խ��'��?��=��sgH^H��u^ �	D�p2�,�s�")� 7.$ �$ �H��O=?��|�eǩ}��D�S�9u���dѤ�r.�g@ʑ���-ç�Ŭ�2���1Gr�tΕ
�=6iP���Q�Dרs�3�M�T}�X�����%����>#$B?�{� T����R�}�����<�}���������� �a>��$��_N�qa�����,p�%c�M�qc����d� %<��{``*/V�#]932fvH,�I�g���+�{	cB���¾jD���=#F�>C)�O����{�f�ȲK!p����b_}�?#�V������/q���,D)�i䁋d��C�0d�`��y�f�u2�Õ$����ڋ91+D�\Ƈ$�͗�욽�#	`V<��
����_ٖ�oTd#�m.�O/�="	�+�o�
[w��Tq�?��.�i��?�����_:T`ؘ���*4mX���K���0��>�1a�����_����� �Bm�z٥�72^3�\G���d�A��,'h���f/J�K��$.D �@�Z�H�4ߡ�/7L- �޼����g��1�x�CF��	z,Z�9����G@�F�ZA ��Dx"�~�P�+P"�4!��_��1��Z�o�� �U�@��"D�3r���gMm�/��`m�]�@�6V�#�kD0"�n����`k&ZJ�H܊@���/M�Y�\'�0��^  D$:�<���Z@��+	���g� avfŞ ���`�?xF�����NZ�Τ�qm"��\�[�SxzF&L�6/��@��K4��͉���P�z
:�.HD$�B\�r���[�T�"�>B��/O��P+\��;��q��*$ɧ����?&�?�꟬͆;hA L�8����C��pɽ�5H�IJZ���2P��B��DLDѴ�z��m���:�?�� ,!��g��XO4����C�L?lH�����a֘�_/X���A F8��z��CFO��S��NP��غk�x�a��'�@�XH6�{a�����h A�Bl�ݛ����(�7A �:(��cp$j�@�$�)���ߔ�'a�w�F�����?�$���\���	ҚX ���ų��0��Zy����@!��Au�zd����{��Dl�������
8�)D��p�#�v�R��g�#M����*�Eo����6������hk4W�r"�%�� M�b���21����uPr�V��Dxv�42j���!H��%�� �L���MX�q��y=
�/�XQNt��l��,6N�CRI(1h�����`d�H"�R�����M��+����Xwt�[w��$H`�Ú}o�]U���O��!�L+A�ǚ_C���a��u���Y���,0Ӯ��K������Z��ס�N%�Ξ]Zǁ��2�z������ 8u���k~���H���?���a��#t�%�e�IԿ�n��W<��:�c�/¢e����D�4X�蟻־G�*W8��FZ�,�5�Y�m���enM������l\��V����i�b�������I0i��F�
Շ��as53�꧜=9�F�iX�7��_4�8tTO!���4�/[7}�㜯wW�<�C�H��zM���E�?�����&6�tAO�G"'P8�H���*�H�R0k��_���O�� +�ZQ	���w�����O(�{p����Сǣd��B�?�.�S2?5���N��0���\ЩW=�6iӝ����{t���ߚ+�_ �y�#hҺ����Zs��9qn��v��v��u!��J4ٮ1��w��{ݦ-1�T�M��	����u"l��3��k0<��˰�����L=��=���?���H(
��bD�Zק��Y%dC$����3��������~�T0t^�q����z}�07o��Wڳ���¥�Qt.�bL�>����ׄ���2��1��i���_ ���vފ�/ /W��ԗX�Y�c��V9�6��g�HPl������1дA]9�!�M1ɃA/��A'n?ǩ��<X�|-����B�F���l=y�����P��(�u2��R�s����=����i����i�s���U�zw�����P︁y׹F~u��	�¿tΫ_�����h�:�x�gd-�ݭ�:-�T�V�5C����
>fEdbQ�dɷ�IAΘ�ʘh��*}�s74��6�10�6I�ر
�w���
�!fit�o��0��>pO��P1�\̒�5�&��h2���-L���U
�9Xx�z�_�T]���k,	F�Ox�8�z� ���nH>�y�5A}����C:��c�L��_�
YS¢�`�p��'���+$���ed�c�/�	쒉 �K�r�پc�!�\��z���H�
e-��^���Ϲ֖��g����I�k!h�%U�k�t��o������INhxR����n�k6~��1OV ɺ�\"��k�������n��ls�a��!�=��y��X�j#,^����P�M�'
+�M�kT��,�Q/<���]۰�?�D�K�F����9�����˭ O���U���ĽԪ~SL��>� +[8�/��-2����(�nݺ��ڵ[��`�	���n�|m����P�0���C�h�H�#����\&μ�{�Z��b�2���;Ȣ�fM37J4'������שg�&�SD���NtȽ���	#sܳ�uae�b4�g��Ŵ�SXpp��N=a����@7��0�|iw#��m~��N�H jU����Z�o���4��]H����&�s]�a����$�kA�u���1��-��n��{�,�����?�'�X9���M3%�V�����C�*'�J��݃� ��w�Ѿ�C�#
G ��-�lI.w-)W�6.�K�"��9�0y�q�c/���3Ĭ����`&w!��@(LW�w���q1m�nh�����i�gs�D��&�����=Q�`'T)������9Y�FU�.��}9U�UMݰP�8�qnkc�W�K60�D�7a����E�jU�
�\ևf&;6�Q��b���#�_c�i߂"n�(�:����ї���f�}��/�aPx3��i,.\�+\X�ԏ�v�wF!,
\�+V(��q�<=���p��ͺ��`�G7-�߂���Z����7ߥw�����)t� _��2f<�-��v��v���;pcC�լ�m�h��b�@��h�a��Z=�2ݞL=�/�����=��$�a���s�[�A%b:�y{��1"�@�עD��}����޺s��X��g������/(���ݯ8)��N���д��wr�P�E����������I���}%����%�ql��MR8��i�kM�苡8��O'��鄝Hd�D���P������bV�¾�#
Z��D���O�~G@>K�0�����s�2��ml��%��.D�����)�?]y�Rx��(��!-#K׻���g��<��7�+~��蟷4�'c?�B�?��Co�A����C�j侀���@� ʾ�5^�#���8�+ �,��IR�O~̌�t7)G�B;-I܉���(Iܷ*��*���-�	^���m%�<+qQ咛�V
��+.t^��=�zæs���Y'�_����7Q�^��խ�5kB��2��)�/�ę19��H.ARv�@6%���]�_xO�a	b��̼V�OX�ɧ�In:	�Ũ��� EF�>��h���7+����h~悸�Ѭ�mb�|F��oJ�{��	��� �b��.��Jɩ�`%r'>�g��N��DY0�%!���>���A�5޴��-Q��P��ñM��%`Ǭ���ϑԹW���E<���<�j1Rg�ZK�@���6-a�r��Kzc��kY�̀Fe3 s+��B.���{�"�J}�_��]�9N�G�;&���wu[(m/�٥�`n0Յ1o޼Cf��1O3@@@@@�@$��zv�R�e˖������L�`�{��Oc!���`DA�742��K�ƻЏй��`-���Ձ�>�{�k#5�N�=z��~ˤ֘D�t:M%_|jV���G)#M��,%B\N���+���J~�W�Vsk8V�d�V�ZOJ�k%�{t�����
O�t#�"�Dff�!��aݲ�C�^FE�x��\��"D���K�k5x�|�����Lg�Ν�ϊ��� ʬ���%J40�����w�¢�ka�!������Y�M\h�5_���棅�� DKY�����N��c�����Mn�F>�����%���ٳ��_�ǞM��u"�DFF��+����Ի["k���nڢ~��� ѡ��&R��ѽk�"q��    y��[,�EVc:�H.w4��6��^�U���g�����*<���D�]������+Vf���к��ܡ_I�S�����?���~�3\g�K����"� �\cFE�r�B��P�je�Y��*���V����[�"���`�]����c�<U�mt����j3�[kmjm�]�$}@��]��	Q�,��ٙE�C�x���u�*�c��5������E�lg^6-��A'�����Zl�������ߏP�����T��D�	� ǎ�T�|W���G�zo� +W��jI��V-@���\�8��ݘ3g�A�,(,��ea�8�>"�[`��^81x���W]uU�蜫�^�l	zS.��F�/"��k2�Ê3��̙3g����(Y J ��kS�0,��{͚5��аx��V�?3	2&f~ɝ:u����܌��^�"�G'���2�O�~ �
�̣{���r��#���������]�>oڴi�h����&胀���y�q�G@lذa�'�!��"��CM}D��6dȐ϶o�~g�%��v
��Z@@@@ ��pt��h}1b�V�ߧl��2��z#����>�bŊ�11�������ɓ�?~�<�<\T%����q����,�
"%x���6m��R�J��q��0e�"���O�_|����ȊG!.��#�#?:v�8k˖-/\y��E�̅��Q� ��ϟ��S�N���~eG�Q�QV�L4�<x��믿>��p��B@@@@ ց=/��ɓ'qľ�\���Y�2'3�8����oR��	�*�N�0a�h�T1�b���Y}��y���'�Ⱥ�H�'|'_�8.,~a�ԩ�}��7����T1�b�<�����+V���{7�@x�F0敶p��-[�|�ĉ��C�"C@@@�k����cǎ�^�Z�7>�����,��/�t0
I傅rT�m�gT��^��<x�믿��	&41b�E�)f�y�~��ia^���^�.�����~���A�m��f �l��(y`� �$�i�!G��3f̏5k�����Y*��"    M���oSn���Y*y���b�4N�����x҆��_�Ν;�]�r�f͚ոy���[��_K�}0m����e˖^x�v�����x`=��Sj}H�ט}�wݴ�cZ�SL��b�9E_d�;v,�u��K��/�x�;[�jU�V�Z�͚��kG�:!   ���RSS��裏����'O�L��%z�{Z:G���H.p{b��ö�@�O>��>�˾����tK�6m*ׯ_��9�WQ�R@@@�|aƚ�w��c�v�:�`��_�����rbQ�VraH�%��k�8˄��F�l�썘zN�:��رc�T�K������}���kԨqSٲe�U��$a]�'`0��ӧ�8p�����ן�;w�	�Z���e�����5��y`V�J��K�>�d���|;��n ��Y�)�yJ���T�f���s�i���xl�A4�Tj�Xu[֬��_+��T�]Tt��B%JT�q\;��c3ShӠ��Oi4?p��g�c݆�SX�����_�D����]�Z]�T*���o��b~Z�`Y��Ӳ��G�U�fX,���8B����؁���y��/��t:��������m��pNOO�������j�D:$���*p1����'0�܋9[̫��9ggg������q{{{���ݍ�~xxXM����Z[/o������|{ i)Gu)�N�@!�Ām��.0��������[�_�K����f�پ��L����I3��"����,h}
.����WR�~�dwF..COC\"V�R�>�g��KJ4d�GmI�Cµ��f��i��w���a��Q���윰r��^�ၦ
��B��1܇�a���w��n�������y`/���ٰ��(������>����^�ɒ(Vļz ^�U�{Eo�'����^��JLB�qIĊ	�R���j�V�Bi8(��kK;�y ��4mw��0�EI!�cA0�\("���m�ܾs큍((l
�@���C0��1l�n�¢�8V���xݹ��Q7=^׹	K��n� ��Y.2�B�/�ܩdT�*�2�EH��p��c(${���e+�+&�'̪E��!��^D$� �Ɋ���7.�<�~Y��C/�^���mŜ�a�7���>�d,Ѐ�u]��G�R�0�P@��}$�u����<� �m�ܮK��y��`�=��@q��X�/-J�9B!�,�B��S=��i�2�}t��]U�@����Bfo�=[��l���hׅ!�K������>,���׿Y
}�C����!�=E!��T��YA���m�\�9�!B!�L�ҖY�����3��S�I�!�̧��y[��zTO�S@mN!��Ł�翄!B!�L��&|N�����@!�B!�27�` �c�~��6l    IEND�B`�
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: image/png
Content-Transfer-Encoding: binary
Content-Location: https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png

�PNG

   IHDR     �   9�oC  vPLTE   	!	'# 
#!)&"!QI@/+&60*H<2YPF960@;4XK@E@9�ĭ OC8IE>"&@4+���yf.20;?>k\P��v*,tcV��|bRC~gY`UJ��������9:���w����� ,+_'Ht�لm]���������X�RUR�@{���6d��ʷO������l�����$?�����@���yHK���p/:�=l�;v�I��0Z�D��[[; +�7l�>u\``eDPll}}	&4zwIP��>K
:Bfk.:,:0@PZ5@WZJUPT��}z)65E9GDK
,7tvoq$��fhV`%2'5)70<?GT��#��)3	3<6�}6A1YW$qo$2��5��:��	%0�  k��&2"0���P�����ɭ�kmj������'@�պ���pھ�§�ѷ����ϲ����+CA^`]������vvu���w��� ,����Ȫ�	������#0�
ILI�ǰ�zz".�JIʳ��������%#���*	6X��o�99?f (�sb���վ�	/M,��k�ba���  O�IDATx^�X�v#M���ZU��� F��>fZ��ot�ښ9{v�s���-٭Ψ��H����I��u??�y�1q~s��&��#��� �W��B�_b�/�RUڈ��4u]SJ�ѴLcLK�u�6�X�;[��$Lk��|X�]��wV��}������iZ�4�^,p=/pH�ߗ���=B�
QUE�n��������>.wѶ}߭��n��A�W����m;��$��vx���m���������31T+� p
�P�b8We5,Z�EcP�5�&Tє,Up����m��d&�m-m˶W��q���w��s:GoYy<��L5�q_�Z���1�kf ���CU���%���@��s�e>XmoZ��Q�(5��].�� H�tB�_�����[�q�YT���p��p~�*��X�� �(�8	%p�5-I�4M�Ķ���ص�d����m�j&iw��ز�=�4���ZH3�)���&eʘ�4Q��,�ׇUT���{�k��9�c6f��k���lx%�T��K��َ���_�p�3*�cA�I�RA�yuDE���-1�ZE��B��a,�|���'X��p-��c�6��ĝXk���)K�Ԋy�Xy�����`��wʒ0�T2�u- u������hS���ʔ,�rk�p�}J��0�QRk��� ���8��_���|�q(�c�A&T��|>?�!a�|nd� �YZ;m��kL��')�`#�.@�f��`[=�^kT�I��(�ѵ�K^�9$��F4$8*
S?sZ�,����2�q���Mx���AY�8�
.|�%�9�}/<vw�	�]{�۝}4`͹V7^�##��휤�Ԥ\�!PC�g��W�L�M�]$;Fu&���z���h/�>�a�y���[Cn���$��(��m�}�HF��z_"��H�-[<Z�����74@��p[3�>���L؝I�	�� ����HG
���pk�a~q�'#s�:[���(n���5@�y�36'B���`�v7�(��@*��忯,��� ��E�!P.�DC���
j����8^�߇�Sʥ�4~�v�ǔ���l���2xu@ Jʸ^�L��N��o�^��މ�am�t4G�ϣ�^̀¼��l_����j��DQOg+�4�c
�k-= /�>����kG3m��MK��8�/��N�`�!n
�� \3T�����='q�a�kR�Ti�5vF=���IG�J���U��N�r9����=*��B�%��i�!������s��5prlj_s��q��\,ˎ����ZK�v}b�&܂�f�uh$W��4A��}�����β.mf���>��GVxQ�����G��β�v���j%��D��^�Ny��H���$t�.�sP�2�/{Ά����&����2���U%GS�(��ա���8#p��` � 1@;�.��@��	���O����y�����0.�8�cS֔���B�4���bR8̩}�U�kX��Xm�y�dZ�� �n�hKYj�-��0ı�4ci��/���J�������0�Wsu~��t�]-S���:Ma�K3�G�k��p��>lo�<C,�Ӿ�h�"��`ܾ?��C��D6�P�9%<Bm�ת�N�i;]1��j6[m�yE�Z�IT����,GܵRO]�� �+I2 �Kn�����Y�"UUk�
r65]� $����I�{<l�R���$����R+^&�z-ⷢ�����N�h���X�4F�?���+~6�+3D�x� ����P��ʛ�(�*���O�:
��f�B�ڿ��dJ@�-��H�(��@�v�a��Eɛ��9E'�i����-���iA-z�U�� Y;6
�cH���]��Z\��a�ǔ�q� JBIK�d�%	�@�2E���}1C�J �H$KS������C��\������7>�cg���:ܩ�Q��6�ʐ��7j���D�f��$���aY(nn�ms��j��a%s�-���QYC�Қk�=t����@
��U �,�O��~���U��ef\\ �T���}��V��Xf߯u�Z�
��e/�tv`��{�0���r�]!�r���NP�ɺ�,&���� B�K��_��3��Ͳ��x0W��&t1� Q��i�<�]��;(!�������y�WX@��=�E��� V�N�U`C�֮믺�'	��jH�6���'�o������P�"q�u�����t�|8��� �>ӚR����p�,��3��'��Y��W6QtDN_�%&��fͤ��QS5�@�&��J� �h@f(�U) �h>?VBI�?���'��K�涳r�{;9���0�����!�g+cU�PuhIj���}>$J�8�1~J��p�6[�l�/6������l=���R��i|�Y �F�.���['� X��'��Y͎�
ep<A��(��8���?9^HH��o�6��_��l���t ��b^ngG�|5�7��v����?T��'�SX6�i�Pl�֠H<
�_6S|����Q�u]�R��W����E1ċ��4pmh��(�9<* JJ�ñ����Q�o�(�jX��d�>.��[0�_-���uB��?�LP�#xZ-��٬�"(xA��e�`u1�I��#S��3��/T[��~���ͣ/���7|���|��֧�|��#k@�����8��yn�����ɇ�"���0[E��A�Z�吷��Ϝq	�b�h2.nf7d����=
awo�9
~��Ec�ހ���
q8~�20%Ř<��=�\���֜Z�"�}�ŋ7|��%��pL���_<�l��+D��6�[�`$�]�G��k��E<�%�{5�EE%���m%CK��}Xe���0��}[�R\3�u�Ľ�k���	%�e�WЁc�)�-,����0��C��(����N�`�-nP������~��|�����/�Ok���/>�QP�2״�P��9��%c�x���S�
1	`Z��H �c$���a�s4�M�4E�]b@���ʼ,�\\yw	 �M��U%��|��]��8�8���x g��[b �л��œ�/���)NOρ�x�?���k��}	B�St@Ack��Y.k�"Zqo$(����1�HE�,�`��b4͵������K�l�4�+#0�u&�O�/�1-_�yj�FUҵ�����L,6����T�vw:��5Q��zc�SC�/����/R���`:���_�}�/�� ^�=R{�N�\=����%��Q�&�`�_q�P���4��J��LJ���%}|��7 � ��?}}��ϧ����pe}�J�Ls�$Yv^�f�}��dLz� ���?�v�����ׯ߾~|��@  �~��i
�Ľ���'E��1P����vKJ@p��mk�D��
�!�<��� �!�-���A�2�\���O@��F��ݻw��>�r��/����������]�����i�i�&E�:{��'�B$6T��* ۈ'i�IP�͋W_��  k� >#Px��?�z����ӡ�.?�pY��2��&� ��!��u��a�j5"Y-�E�A͇���2=��K�S��=4��Hqs-��W�0����Ǐ?{��w_��Ą�x��w���5i�Q�M�d�F��d�"4J̼Y�N�Q8�y9�Ӹ"ةA�/~��ի�`
h��u��_�z���^�d�;ؾ��q�Tjt� �V��b������
*�y7A�lL��`M�yre�=7������SF%|�Ax����o@��� nN�X��ۣek�*�u�����JI�-%s9�R����8�̠7o�����4�) �T��'�� �T���X֐f̪CJ·PY��G�Q!T(AO�Bp0XC�$!�!�^w҉X��=��������N�� ������N�l@�IG-���qu&���(��3nu=m���jK�'��G{#�"C2(�Vn�7H�^�$��8����c8ĉ��'ݞ9��Ae���4-��JHAUs��g���_�^M�ԡ��㵞���{5S�"�i^��k/�J�_��z��M��%�`�͛����T� �P�l>G�H��{�V�`F�
�V]�&��xဪ�cA���:U�
�����R6Q ���V�Jj�aJ#���>���H7�������X��8Op\�Hs���TM�hN*����\�f�R*�LC�5"���+�߁En80� �'���~ ����T(��UZcKT��jW�נy.�.���y.Y�3�,URI��),.�"m��.J�|��<�� uvA��</ L�� �qN +>=����A8uD�b?�{�T,�yiX1҅����_��L^��%�H�.ߔ*vw�����%@����M=�x`���_?*AJ� ps��j�c��:R���
f��$��4D�e�����_	(T�D�,�@�	y����˲F	�P�j���qS��2�����#:�,����tNkڠ��V,5�Hɹ��fX�i� ���Z�@ ^l1���x?�  �9���%�<C��VX�Ϫ1`�����$�^�CQ�iYh���h6J9�˦m�;����I�����{��_Ђwϙ#\�Q��;��A�t��|H��H	1�Os����o�������e�v��(m��m� n0��} 1��M��n���<�H��-\�����P�HR=�	>^�
��kQl��B!U���,)�yt7y�d((��Bj�OUç 8xc��	�L�f��y����!; p�Y������!�M��IL�p L�O�=���@@� .	�� �'��  �h�E�0(�Qs��3�h���J!)B�F�X�@Xd��^)?J6�~* hE�TYv[�h�<x�'P� >�g�	
�s��{'/��2G�ʧGcgy\\^ -,�jC[�KB1�j"��(�D
�M]��6�� a�J�1W�O��	`0�����`��kGE}J�ɻ"<jLS_�]).�J���TI$釩��Ŷ�>^��o	0`��O����{�C,���O/�O	���}������Br�
Av�`�BnH�Ŵ�_�HKYj��{���)�F��� 0g�	! ^5�hd8-��`�[�8,���"zeģHZt^\O&Q3�,�U� &ψ _&�@�2 >YP���p_a����sV']�JB��q�+���\j}}���i����Ѕ*���Z^e�Jv�	��x(�@�@ L p��@ �Ŋ �n�g.ɰ���P3Qд
���^y�G�*�cE*UK�l�WÅ4�2����p`4@�p��1����a��oDg� �`� ,TѸ`����j
��(��l���0a�72��L����@ �8 �Y0L@`��o4l��İj|�0%�D�ڱ�K��`�G��+�)(M`O��:��-C���T� �ǀa_�,�8e���+P�kF����Q�-�I��إ��-	��i8�j������n� �fS	���[�E�xr��s�T%pz���l<c����y�N݈��Рk��l���yA�hcg��M�W��׋�z��c�<p �,��p��x�1�5�������ZT�n�p1t_��8�9u3S�tc !@a�#��@�8a
��`}W�au]�a
"�)�_��u��м��g��ߨ��^(��e�̾�	��B���"x ��8e{��T,Z��hRJ����"O�@PBA�aD\� d���(�C�D�`0E5��o3Ӻ]�'涘'�d�(�T��1[��Ԛ"J�T�(E�$�5�h�8�\\+hY�
z����ApxٌR�<:g���@�:c�=���Y�`���6�H��x-r��#`��T��,9#w��\�C�T	��l\�/r��a�n\6���� �р#
�~�3��\��,�)1O��& A���y8��I��Ü� 8U�f��q���G��3�5�?99A����;��p��o� �0�YES�2Ikb�	!�AOm������{�B�/a�Tp> �����_��܌�B�XW�z��̧x��?�
A�+v&/b��%,BҔ�}�]�˕
"��´e�.��?�J2i��� >a����������x��oh�5&p��V��K����v�p@�.5P,�'�w\�����F�N'
���L1�%�"��۽׿<*gus�V�y�"��*>���} p#��4%�>7M>�a���LB����]�5���`WV}8À`p?�������Wx���j�0Gt yCwi�
P�H��+�&��}��<��χ���n7���{��kǃD���q�;���>��}G3��*�����C�:�Gxcu�~�v�uцkИ�M8�=34iv�%:ˍ&\��{����G+?-N��NO_�_�	t���T�4U � ��@�?���+R�P08�=t��B�go��6��K��\� �mu�����7��G��{w~Ժ���>L�d���H�E�(ŎZT˘$�2x��-c�
M3�C&�7�d����}������|��S��$0f��t���2vF����$Tk����?���
�d�@��	1�vݰ� a
�>�Xx'4�w��U���Qhnn�:`�C�b�%�g�fp�����qW0��(�V��ugl��z^�QO7��b�$��vi�
)V���� *�/�����e�s��;8���� Y���4��B1�a&�9�A��D,� ��G3 !�D��6+;�Xx1��rk��vDɣ���h�u$�26�teߘdI`p�	
�4�؊��9�F�T�Q���b)SZGr���q�
 Fp`.����P5�@ :�T��0��1����A��"'���R:�-b�F ��A�l�b	1��(�p�	]\D"4^��"���Eos��=hG��� ����3��h�mZ,8F�E*L�6˱Ƒ�!���Cz7���:v�4�y[�M4b}�3m]����� {�"�T'<�lȍ� �Ҁ8g�{*!����IU��Тy'y�\6��Y�l�fk�棹���\�@A�+΅��$J�p��H�1��� !4<�u��\&�F��hф#$�M�q��gCw1���!py1��О-ٲ�~߷l(ݾ�l�� ��A& ��:GD��� H���T%���z�����Vlg��C� fp��i���p8��`���
�tD(D:;��Bt���$~���c�+��GP�)��N�����әF� q�!�l�(%�ӱi�F��H+�'���Ҳ��&˲�[V�u���RI��h��K~T�?9�'�{�����`�¬X�Jb]+Bx,krR%�4�HE�0�53�Y�>>��c�����`o���7[�HEug ��;�x<~�����w�5�i���Z�,���R �yS��VZK��𡤈�R�-ճ<�p���:�hV��/�@~N��{p���s��o�	r����&��fA�y�I_FY��)+�}~�t���"�U��hL3޽s<|�8<�t�^Dw� B;�ס����;w�LwM�_\C �6(�\ưA�L�����D�j1UX^�Nc��Yw�U־XZx����U�&��s�>�k����mUh	�������~������ӓD����z��������}�Ȗ�"��f1�ZZ+b�1x8p�䉽nW� ~��<9C�N�_.��Mp�v;ھ�����Y����9�sH 7iL�BT-��h��"J�����*k""TU�~s��2N�(B)�W�b�p���xqM2�毄��^�v!Ľ��۫��]L�ޟ%^%h�ƥ��-�G��!ʈŅ��FZ�x����U��x/y=|٭��-u���\=��v������_�_>��W��;;(��/�6���@�%�UK�������d��?�?0@�b�l�PT+MТ�:�>q�Z�Z�͖��'�\��m��K�_�O�&��%���������]��Se݀�*J��I���,Jr$]����.Z\�eɶL \P��O�~��l�� EҠ�ۼ�^�\>�g^ΆzL{��˸n���=��N j��胹��z��t��3zy�a����,c<�B#VU8<���R�B+��_F��	����ó����٫ӓ{��GO����{�;)%Y�bv'j�dTd)REҤ�����j�"�F����0 ����63?�=>@�xI�ߚ���7��>�@�40Z� ��G��GZ��sqaǡi>FH&�w��ZM����f7�r*�bF�;)����.+�o���@��v'�����Y���8�=:��j����R$k/��4hP)���zU�̚��P'�AK����sk�u��X(Ҧ�mn:T:_N�	�6v�ඣ~��Fz���f�n�[@ ���R��a��l����:R�FV��T3yU�[�����[�w`>t�A}�ٯ_n� �����ߎN��!]%NN����&Ѭ_�)"r$����e��j�*�τ��y���g�	�ʳ����P�v��p�>x>��l� ±���Uc��'�`�n�tղ藙6��ך¬i8X�G���*�0qTdI�2�~������ycC�]��a"q��@��w�Nw��N�@	�&j�J)��jR
 �+��脓��fH����7Q��cr@���G�%�BS8`�do0}'G ᮥ�$�V$�>k� 3.��k*7ho[�@j\��Z���m���Cu�<E%�x�4xŜ}�|����<P1�H�,��*�_��D��Ja��2��&�ZaB�!H����{�=�1Ϟl����h��3� ���X �b�v�Vm���b� �E���֨�V�+i���>[E3Y'�հ@�)X�a�X,� �lB%|6Q�T�dA����
��դ�&���9��jemE��ɀ�����[�U|�fw��F`F�6���*9h�����z6E� �1lq��WF�(�r�|��v�˘�!-a����߼�fD��i��B����P���:A _i��>�5&�o���a�g	"�)IM[)KM�ULג9�>@@��J������n�H!�f�4ng, }�f �;�ĕ�h�|"�0���qW�,��E3�@�&$?�JH�}��R��&´���p�ѱb#��)��k�=hX�h����I�H�� мG.#?��d�bZJb�X��h�Y�}�p��+�Vl��b�.��@t`��3J �?"c`��%�v3��������k)�IM�"7�(�"����D�LhseE�"�����<��7��úč��E8��(��c`<.X�̟H���R5�1U��$�c�IӴ�Y%W���x-�?�\�{�������Z{������f�-��8 ����ݙѭ8��ew!I�37��+K��WK��*��It(�:oY5�c�$H/`C�JԿ�;p��X�dl�2���躬75�W��j��r���q��4i�s�H�n�b&nCw����T�K�v'�~���jI�[��1Bd4Ӎ�B/�}u��jFZ�c��� ]�/`���:��>Ha�'����M��E�6| r0��#0���_ac��C��&`8z-�\
��ݐ[��m��m�h���E��}��>�+���X,0 ���l_D����$U�;�-�"1�p ��u��jj��a}����kjh�����*rBK��<,2��iݎ'�u:�������y�� ���<���\�m�4��X-��qw��P@�����t�+��L�=>&���r����B���0�#�� �y7C|�݊�}����>⊚�n�&�B�U���9�B��*m�N�J֐��+(TH�M�\
 �ggl��}�E��'������4U���r6��s��o��;���{���Άo��ӷcL�c���%J�^(43���hf�?±a p��8��Nǧc���� � �w^Y��ǞN����Z]��K�R6+fj�M� &W����J<����&���?�C��欩�(�����dJ6
�L���^�8CV� �&Q��y1o��p���s��M��0s'@�l���ջ;]kM���N�B���i2>��������`�>�.Z��4R"ѹ�7��bna)U-@u5�Z^�![AұR�Y�?�"��z˪�Q8 �܏�T#|b���zi	�-7D](f�T�8���蘏Q�10�ޡ��A���O�L�w�����%��͙��ݚ��4�iw�=�
����,FL��?_�� L��Tf�w	)"+��ɤ�%Ws�r ���U�M�a7Z����1�Vhs��"���/�S�2UP�Y�R�V�6����
J��>:�����݇?���ӷ��p�*o+���P���a58���p�fm��ލ!�UO@�U<R�傔^�e�k�������S���U ��wiS/7T�=
x�X���/c�xz��Pkz�	���>��܄�̪@
���O`�E�?�@/��8@�\�P�`|���FA7��Qts��0��8���_��W��b��K�N����l:����Y|A\�蕜�@��>�j��:*
�)5��#o1���@�ie5��O7LU�p���Y\%q�[N�����0e 87 ���v�n867b(�7p��w�TK�M	P�Gp����y��1 �wo��7;_NV����*t�24h]%!R=�}��Zp�Ѻ*���`�K��I��|]a���x�д�jھ�Y�N4 ��e>M����n(܀��܃�J$��6�%w���& �pC	�°�i�
${��$�u�8`���w�b:�*TV��� \5�Q�m�ef�:��|^)��C |4Oۧ �{� }��MU�ت�T|�gs_���~�1�jqq.\x�౦�B �@؟F&5�ԛ-LV�d=`@� ��; |H7<�}�7A�y|ǧ�W^n��r�d�i��8���M�dD���m2��q�81�`���s`n�An:�������yq���Mqh �P�K SaGC]��D�9q�X܈����j�N���&�`�Ea��"�	�����H�"�ʁ��ʓF� ����
���_աL��|AA��f�ͱ� ����Ops>2a�6�i��S��}�>�h�Y(��N������srF�m#A��!����%M��a'V 1м��!/�O.���Bj��X�ն+�� G1��(KA�� �t���-[�ɵ9��H��og4ci#
��^�tr�|�  @�V�}���1~�]���F��E�@4��I�* @:Z��w]���{'�p�2=*ҨK��8���*�,A?������� ��ܯ�L_9�(�Q��L���yj��i���X�Ƣ3�u��p���B�������k�c�yY~����c�  EN����|+#�ǎP����A�U�:[Qs��+��.�R4���iB9��2 �0v�^�QRt����8��s��VR#A�Kg�ۈ@���?��e��h<nT�6�>{��/��j@`���ܗ(G��0�Y;%�P�|N���IV�P,��{�@�<�(oW�^� ʋ3�פ ��:���Tl+�Q���lܡ�HI	��3�LD,����ȑ8)L+�OW���A��:n��h�
�ݹ#�01*t��!�0က�u���6�����Y҄O�VR0_��h��}b��Љ��*���������6�pG�,�!��>+ pS��s�	ˍ���W܉�`�3B)Հ���;I��������?�腑k#d�+$=G��ʬ;��2��� N���BBt*��۶�q��i��R���riz+�� �Ѹr���yav�ԉ�r���-l�u�mv�������n���q2��0f�kl5�G ,ҋ�S߄�&ޏ!U��׃�He�Ȱ��Dg����o���<�2S9x�bi�4�U��L�B�R����^PPlmm��C:!T85�s0@)�m�K	jO��8����ۿ���P��R�g�D��wuF����R��߆�����%����d��%�xs�˜xRA
FKH�kJ�V76_�s� {)�w7v��S_�Y'8�!���kY�o�-�`�!����T{���٩�G�3e&cǢ �X���r����F�J�8��;.\�AdG��~o��9q�����N��*��������
���Ki\oב<)m A����[= �'� fR �v�XBtݷ��v���BrpH�q�F!0����&���|��A��i��D��$P���+�L�i7H��3�����2�9YDwj�^�[��|�n\�P����M�O
{���ɚN���R�Cӳ�Ҧ{������vT��a�P���J�-��+*X<�_� �f��&�2tjG<tQ͛[H
l���m��:}����,�$��kc�Ì�-6���J���XE��'}�℀.����F�"Y�
6�<Y+K����hj��8���4�&M�c�(��1����:���F777�n��hD��V�����Rɬ�� ���S%����+	S9G�
!A��W�^��3�!<J5MRмӌך�lx���!�R�[K��6�v����qm�x��<���4zmǒ�af ���,�,���'N��ƔF_�z��U�Y^�`��*r(|�W�R\�	���g�����:\� <a��\Zs8D�!�	�3%�m�[N��rT6�@�`��� o�CʭΗVTd�V��|a��?�����썲e%Ġ�$�)��TXh����N(9�Ύn
��A`��A-�� P Ph�.8�`���``�������)I���v Wg��	K��T/��Y�;�/g��8�ad��HY��	���h��7B��-�rW$m���7pOu4{/u��f�$]���d����X�h5K�c������/;���v{I��2�4�_p �c���'�P��8�����r�������5\��T����ۈ=�N�o���sޅ��`aϮ��cb���j���@�T�����EKp���/������i�4	��,��������q�]4馭��,��k�F��7��0�W�ǂ''=��R8T̇�N�{?��i����ݛ5����;����*�6+��r��,Ӵ@�1�%G��H�}]7�n�,�`#��D� ��7��l�Zן�0�yk! v����)շ �}���(Qwu���Ȱ|"�4M`,�k�C�e�1;�oܼ�F`X�E��N���(�˿`��T�o�>ھ��}y|Ȅ�in�{�A�J%\��"�؎�6�9$1���0�T���Ë�@!�·���I񙐠�~2*	6]��"���3� �A�(��R̄!Z�,P��F��� �Y��H�H�D���"�d$B�#6���=��53jmpѓ��U��fWR���-�yr_�\e
�������Gq���h-)�u�/�b	,�BR�y��/a	�Zǵ�K��~z�܊*!.>"��@a�$�N�|
�Jqs1�4VD?�����}��#>܊������`��y�	�4$a[��Z�����Q�@P�����`��mC�k|��rQP�H�<	K �!> �?�����T
�a�c6߻��nM҄�)���m����# QJ�"� #i�@AgV6$���Z��{_׺y��'��F �L���q���	_	"U��%�;���s�uCBׄY;~p��z�( ϰ��#�@�%��:7(��M�k�BϿ�'��L�,A��T8�
x$Z�O۾LL����,aCe�WJ�Ѵw_ޔz�@�<�g��!��/�7"6/o}���$A�Vw�d�p��r�� F	�S*%����
�>.�;�@�,��3�So]�M�:�m�s�|C7��&s��eEcZ?mL.p�D@)��8I
�?����������c�YB�p�X�ѝ���+�fq���$^�������$`��~�w�ˁ��oK�Khڸ���P)�v�2�־$�Ùe��#�[��0����D�ra��zJ���r�S�c�Y(Р��o������ӄ䩷gG��<�+I.r�'O�W��t'�`	1Fo��v��ݏ{v$4ղ 	2[�]#����H"1���X��v�/��ӳXB�Ybf��\2���]Y[�^�,<��e@���yS	�%�#c�۟�9e��צ������T��|����+i$�E��D�y�k�֏Ή��3a�	��0�������ti�J�s��V�Q��B)/k�IC�K	�lBn���yԃ��w����͆������ �	���nN��"2p�ŉ�(���Uں��E�`�u��g���r�Ϥ}�e�C�?�ɡ���5��Ge3�����麨�'�*O����0^]�� 	�.
���	�{�����͚V�@��|�H�j����&��wuw(Z���%�Qo^N��8�	{Q 	z�K�6��R�W�W��Ot�	���u��u[�?�T��QYy l@$��Leq�i��8�-�j�ʇۏ��X{(�)5���N�Z��T��b�">��r� �Ժd2��s���Ђ �����q8�R	� 9mYcZ'Zl�}1��X�=)���,K�Uw��C�u�طR�V,�0N�ԣ�~eE`	r��!�&�dv���{mve���0��TBF�&�T�-֫���<:|�B+@.�i�U;�h�����uU�x���]Pȇ��|��&CQ�("JӇod�DX:fce��)��?��#l�
�*�w���\|'�Ea�6��5ީ���( v�4�S���M����"�G��VE�<�N�'4u�U��5���;���Q��"�u N�"�J��v��g8j�o���
�E�6�髛^�� i��#�2 FJ@���B�c9�WA�O˨�<��TP�ܦ�Z��V�y�B�xC�g#D��.A�Q)�ɨ�Z#��b��J��Q�b�D%�@Ep4 ����ðG��~?�._�\ �B���O����	��Dhץ�P�	�x�5�H��?�`�6�����?&'��ބ���b��υ��ƨ۲��#9���k��]rBXa=��iB�G��	Dʢ]e�GX��9�6X��X�W\hb�D.NH�t�!:�
���d5�\��sȲ$�7ke�� �aG���l��⛗�A��=���T;�����VI��n�<cAC�i� ��%@���$H��)W��4���?�L%�$$�<�b����=Y-�����;P0�/r�T��k�/`A��Di��NaN0d�`01W��=��Ƃ��.�gS� B�w0���_!A-@�6�#qa�ZUB(@5	LP'�m�0|�ٓ�u]8�-�qLN��@[�$l,��x���[��(��)��_ �
ob�h�a�� }��C���}����X4W��� ;���x"���&�R�@��"D�{�k��}�����a��%@�Y%�QD�%̪��y�;+���byxޖ	hq� �o$@�f��&��"����e_�f�����x���A� ���]Sk�8Xt�NЏ��)=5j�O�R]��0AN�-0���Л�P�w^��ZW��e�q	ӈ��ՠ��$���N�u 7�0��0 �ǓKh��@������h���<C��d��r#�a(
���EI��f�e���I�hU1=y�1§���Jyl��+��'	� $<�S	�Pq�"����&۰�3f!�E �)�K-���鸐�z��Z�Ӕ��NH0�(x�o�/@��&l8g�ߓ�+&�\��x8FA0E~xW���z�@��	��|uE�܊0͇k�r�1Qj�Fl�~C�0d�@�@ko�78I�mxn�6j*	�\	e́��ԉ��P5i�TvK�����n?۩����FBY"����e�ʍ���� M���&a(�C��F�y��U�^$�v+���H*~������^�v�ٙ%�ɑO�%j̨�&Jf>�f�1�z�&������_�&Id��(��x;K�+�nd+� ���=�"+�}%�?�n��|f���������%�>&�'G\�!4Xhr&�ɬv]gu&:
�9Q9E�4Л��o��h��(x:`���u�C��c���dm}�6�����vh��E��i�(��6C� ��&]G;�uhf��y�[�ز���y���؅2��WZ�!��i�fH"��YpB��l1���f���F��p���G���e�޶������XL�X��Ï�m�>����zv�yb���-��v���ah?$O��H ����J��`N<%��#)|���	}��ꫝOR�j�ۂf[�a�W�j>P?!>����$�ǃ*+Ȝ�K�/��y��ܢ�愍��!ԊD���Ă���۱(J�(ctuG�o�	�n;�;-�!��edL=T�Zs�$�0��/�;b}u&����b/�D��ƨ;�~�q�g��u�r2����e�nOl{T6]�����V�k���F8�J��}	c�`�f=��o�`�!ڰ�V=1y~&֋�{/�!���Pp06~���ۉ'En��F�`
��1QQNo�|͕�P��v5/Y��I)Pm7��)z���SՌ zE)�.�e��	��1�hc�?TË́P����y\3��g�Q;Y�����֨q*!x����MJr��/����6��wѕk��zkY��o�ד�0/벼ĉD����ñ�{nZ��s&$LR�~X�u�9����V	������H�]�]�fg�u��\�X�;L�H�ijs��|�H������/l�I/BB1���8�Z�1�pj���롧��հٹ],J$d�oR���azx�p4��V��~\{��8�1ȼf�cj���?$L�;a�a�Bz�{!>�Q�R�|�"n�-O�0ԕ��=R��<�i�UCr����$��H�9D��u+��v�H�LpP�H(kn��C��M�?�	�M��^Sp����Ok09�MHȨ�M��n�##�n� ����6���<Փ���g�7��=�KɄ�{o�S�'2��7��V��Z��w&��V�GO�Nj�����L���D��rX�B]V#�j۪��o�������-cP;��u��3��jH��C$�5| �ZTɄ��H��<6v�O!\��	�����鏡�Tg���$MH��q¼�H���uV�u+��̄�� NJ�mY�M�	���s����-���
��K�0:����ƣ�	�� HM�=F��o&����ju0��e��G�"��6Kt��$ԭ�/���H� ����K��	'	�=h�=H�.TA��%�uCR��΄Es+]�y?�Oc(�P ��yK�`�Z8|fg&d	'<�=�^�1�"�X���s����8J;�Q|�(����ҧ�p�����SYH�^���$��A���Iig�s�w熪wV�gtnߝk����;@;7BB�\��t����@�#C"�����)��''=]�B��z2[A��7�]��D������<:�{���H��� K��)���L�*�PPRpu���&ȋB�|��(0)��)��a��`sI�E:���0�L.�h/P}��I��_��͏��ԧ�(�J�� �����W%D��D�3
`FX\�g!:d�A��g��qב0i�[j�޴o��	#J��(� H�.�s���ä:�D����@��~U$Z0��Fc`���g��X���H)h����*�B��w�g����N����+)��/����t�} ׉7q=�T�&�Gc�����0��x��"���
S�����/�xH�[����c;�Q���MzL|QeҰ��xvR��n�G����?@�ۥ47'�z��9�g�]���X<Q�޺���l7�q���c�>��$��� ���k�L��wh�(F�}B��%D��!#���P�����>�J�:JS��1{V+=U�|�>���)#5��Hi�|M-����JŴO6�������@Nrq��R�3C�/�!%:SF�
��m�\�s}+���
���0���.R�Y�˗�OR
�2�qC�v��}i}G�������o�7A��k;Z�m&`�6����<�9���ϥߔћ/�m�aR¬�����XS�6�Hm@PƭY�)n��kkJ�ӆk�%�"��h{(@��b�zg�P�u_d!�\s6�C��䬝W#���Co�Ur��a0�Y&��L|"�������%�������_��=-��&N�g� �E��j��Rfo7��b��-7E�i댦�R��6�ʆj\���g��-�u��c�S襮�O陴d�6�Xe�~���VR [�ד �ʶz�C�[A�,����A���?��6����u@n��s睭l����{Q� A'��Ƅ��4��mb�7C[����մ@�EڌÉPЦ��t:���G;�+x�i��ԖΕ� Եm*�qm���a��;N��;��g�����ѿ�(�:�U3Me�v�h˩?)�������}ol����NU5w+|���w���jzhrC8��!P�~�����?�\Ш�Pڦ��H��^�[?o�A]����RZ�z7�������Td��Mf��f�Q+�); �� A�q5@ ��֕�b�l���m{�tUY��ոp��=�P�i�m�U��vS��z>�`5K�< $�W�C�BJ��z�:�l� �'�M�Ko�mCU��v�!��� A� H�`Y��L,340Pl�w^a�u�+hC P:��P�q�6@������Rg���X��X(N\U� ��	�U>p:��-,�f��-+W�bp��T�9�Ȟ��K�ep�Q��gJ���,��k���g�p� �Be����aʲ�y��X�/�jl��)d�Q������FeVL����P��ueZ�֓\�kѲ��j�m�Һ� B�Z���KQY��a�	E�����jm8���/�Zȵ�%o�� 
7q}�5Sl��̟�Djq�nЮZ�_$���`Wq�¨.轁~���(�J����2����y%9F��^LN� ğ �f^�n��ov^-	�C|U����/1�d����:h�6T�����Ce��[�NKưȴQ�¨���_�ҵG����p)��m+�`m�u�z�P@ 9���#����;�uui�^�Q����E�ܴ�[Xn��7�I��t� �����zl��v�DAۄ���Z�OF����9#��-A�)�7�5�/(�f���t6�R�)����p�`;^*מ��ђ�ݹZ�@Sڱ�3��J��@4̀Ȫ�Y�NE���/F?�0*���n��8��Z��~�~��Rϣ?�ʨ��o@��Ʒ�F#H58�שr�����r���7в��_���������i��ul���4���M�4���A�+D�~S����Ҋ6K�) HX.y��w���8���}?�Z޻�L�������Q���PĊ�4x����^��	��v�S��4�{w�@��ֽJh;c�cwύy��C�S�]�2!iZO]�ڳ0g�ʯ]w�ߔ����) hA}�� "<v�)~QP�'F��W�$g4u�jA|���7j�����n :i�ޤ�y���H9����O)��X%�l���I�Q�T���=�D������ I<ɽ�@��I�w��@JV���Wf_��6n��հ^�9�%��[���hm4%��!�D�H�I)�fORt��e�}et�`A�_��PP#�~�ɠ�s/2Fpy�g����Q S 쯮�wj�p 捊�q?�)����Y�1�L�+���8hz�����	��%��%��/K5GqL��i��i�g�(ʥ��Y!�jI�Ҩ��:*�1�;�9(����F%R���O-�ߋ~���'}�����$!�;I!��$$��h 	��` O	B#�I @F�\���    IEND�B`�
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: text/html
Content-ID: <frame-BCD39C632527B9B045E1BBBE5AD1F458@mhtml.blink>
Content-Transfer-Encoding: binary

<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body></body></html>
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: text/html
Content-ID: <frame-693701378F0C5455B2D9CC01FCFFD84C@mhtml.blink>
Content-Transfer-Encoding: binary

<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body></body></html>
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd------
