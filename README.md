# 내일의집

### 1. GNB

- 로그인을 했을 경우
---
```html
<div class="button-group">
    <button class="gnb-icon-button is-search lg-hidden" type="button" aria-label="Search bar open button">
        <i class="ic-search"></i>
    </button>

    <a href="/" class="gnb-icon-button sm-hidden" aria-label="Move to the Bookmark page">
        <i class="ic-bookmark"></i>
    </a>

    <a href="/" class="gnb-icon-button sm-hidden" aria-label="Move to My News Page">
        <i class="ic-bell"></i>
    </a>

    <a href="/" class="gnb-icon-button is-cart" aria-label="Move to the Shopping Cart page">
        <i class="ic-cart"></i>
        <strong class="badge">99</strong>
    </a>

    <button class="gnb-avatar-button sm-hidden" type="button" aria-label="My menu open">
        <div class="avatar-32">
        <img src="./assets/images/img-user-01.jpg" alt="user profile">
        </div>
    </button>
</div>
```


- 로그인을 안 했을경우
---

```html
<div class="button-group">
    <button class="gnb-icon-button is-search lg-hidden" type="button" aria-label="Search bar open button">
            <i class="ic-search"></i>
    </button>

    <a href="/" class="gnb-icon-button is-cart" aria-label="Move to the Shopping Cart page">
        <i class="ic-cart"></i>
        <strong class="badge">99</strong>
    </a>
    
    <div class="gnb-auth sm-hidden">
        <a href="/">로그인</a>           
        <a href="/">회원가입</a>
    </div>
</div>
```

### 2.sidebar

- 로그인을 한경우
```html
<div class="sidebar-user">
    <a href="javascript:void(0)">
        <div class="avatar-24">
        <!-- <img src="./assets/images/img-user-01.jpg" alt="user profile"> -->
        </div>
        <strong class="username">사달라사달라사달라사달라사달라사달라</strong>
    </a>
</div>
```
- 로그인을 하지않은경우
```html
<div class="sidebar-auth">
    <a class="btn-outlined btn-40" href="javascript:void(0)">로그인</a>
    <a class="btn-primary btn-40" href="javascript:void(0)">회원가입</a>
</div>
```