# insight-shelf 总仓

**合并总仓**：`insightmarketplac` + `factorytoshelf` 两个项目的合并视图。

## 结构

```
insight-shelf/
├── factorytoshelf/       # 项目一：FactoryToShelf（独立仓副本）
│   ├── index.js          # Cloudflare Worker：Shelf AI 智能客服 + API
│   ├── site/             # 静态站点（121 个页面与资产）
│   ├── schema.sql        # D1 表结构
│   └── wrangler.jsonc    # 部署配置（Workers AI + D1 + 静态资产）
├── insightmarketplac/    # 项目二：Insight Marketplac 供应商主站（独立仓副本）
│   ├── site/             # 静态站点（纯黑主题，样品展厅首页）
│   └── wrangler.jsonc    # 部署配置（静态资产）
└── README.md
```

## 两个独立主页

每个项目保持独立 Worker 主页，互不影响：

| 项目 | 独立主页 | 独立仓 |
|------|----------|--------|
| FactoryToShelf（工厂到货架） | https://factorytoshelf.hdhaidong.workers.dev | [Hdhaidong/factorytoshelf](https://github.com/Hdhaidong/factorytoshelf) |
| Insight Marketplac（供应商主站） | https://insightmarketplac.hdhaidong.workers.dev | [Hdhaidong/insightmarketplac](https://github.com/Hdhaidong/insightmarketplac)（`site/main` 分支） |

## 业务定位

- **FactoryToShelf**：美国渠道公司获客站——帮中国工厂与品牌把产品铺进美国主流零售货架（66+ 平台 sell-on 页面、Shelf AI 智能客服、播客与行业洞察内容）。
- **Insight Marketplac**：样品展厅主站——「样品展厅 · 看到即可索样」，纯黑主题，覆盖 ODM/OEM 代运营业务全流程。

## 更新方式

总仓为两个独立仓的合并快照。各项目源码以独立仓为准：

```bash
# FactoryToShelf 源码在独立仓更新后，同步到本仓
robocopy D:\Temp\factorytoshelf D:\Temp\insight-shelf\factorytoshelf /E /XD .git

# 部署（各自独立部署，互不影响）
cd factorytoshelf && npx wrangler deploy
cd insightmarketplac && npx wrangler deploy
```
