---
title: "Using SQL Window Functions for Advanced Analytics"
date: "2025-06-10"
---
Window functions allow you to compute running totals, ranks, and more without collapsing rows.

```sql
SELECT name, SUM(sales) OVER (PARTITION BY region) AS regional_sales FROM sales_data;