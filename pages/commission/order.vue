<!-- 分销 - 订单明细 -->
<template>
  <s-layout title="分销订单" :class="state.scrollTop ? 'order-warp' : ''" navbar="inner">
    <view
      class="header-box"
      :style="[
        {
          marginTop: '-' + Number(statusBarHeight + 88) + 'rpx',
          paddingTop: Number(statusBarHeight + 108) + 'rpx',
        },
      ]"
    >
      <!-- 团队数据总览 -->
<!--      <view class="team-data-box ss-flex ss-col-center ss-row-between" style="width: 100%">-->
<!--        <view class="data-card" style="width: 100%">-->
<!--          <view class="total-item" style="width: 100%">-->
<!--            <view class="item-title" style="text-align: center">累计推广订单（单）</view>-->
<!--            <view class="total-num" style="text-align: center">-->
<!--              {{ state.totals }}-->
<!--            </view>-->
<!--          </view>-->
<!--        </view>-->
<!--      </view>-->
    </view>

    <!-- tab -->
<!--    <su-sticky bgColor="#fff">-->
<!--      <su-tabs-->
<!--        :list="tabMaps"-->
<!--        :scrollable="false"-->
<!--        :current="state.currentTab"-->
<!--        @change="onTabsChange"-->
<!--      >-->
<!--      </su-tabs>-->
<!--    </su-sticky>-->

    <!-- 订单 -->
    <view class="order-box">
      <view class="order-item" v-for="item in state.pagination.list" :key="item">
        <view class="order-header">
          <view class="no-box ss-flex ss-col-center ss-row-between">
            <text class="order-code">JT{{ item.bizId }}</text>
            <text class="order-state">
              <uni-tag v-if="item.iouType === 1" text="借款" class="form-people-label" type="primary"></uni-tag>
              <uni-tag v-if="item.iouType === 2" text="出借" class="form-people-label" type="error"></uni-tag>
<!--              {{-->
<!--                item.status === 0 ? '待结算'-->
<!--                  : item.status === 1 ? '已结算' : '已取消'-->
<!--              }}-->
<!--              ( 佣金 {{ fen2yuan(item.price) }} 元 )-->
            </text>
          </view>
          <view class="no-box ss-flex ss-col-center ss-row-between">
            <view style="color: #FF3232;font-size: 32rpx;font-weight: bold;">￥{{ fen2yuan(item.price) }}</view>
          </view>
          <view class="order-from ss-flex ss-col-center ss-row-between">
            <view class="from-user ss-flex">
              <image :src="item.avatar" class="user-avatar" />
              <text>{{ item.name }}</text>
            </view>
            <view class="order-time">
              {{ sheep.$helper.timeFormat(item.createTime, 'yyyy-mm-dd hh:MM:ss') }}
            </view>
          </view>
        </view>
      </view>
      <!-- 数据为空 -->
      <s-empty v-if="state.pagination.total === 0" icon="/static/order-empty.png" text="暂无订单" />
      <!-- 加载更多 -->
      <uni-load-more
        v-if="state.pagination.total > 0"
        :status="state.loadStatus"
        :content-text="{
          contentdown: '上拉加载更多',
        }"
        @tap="loadMore"
      />
    </view>
  </s-layout>
</template>

<script setup>
  import sheep from '@/sheep';
  import { onLoad, onReachBottom } from '@dcloudio/uni-app';
  import { reactive } from 'vue';
  import _ from 'lodash';
  import { onPageScroll } from '@dcloudio/uni-app';
  import { resetPagination } from '@/sheep/util';
  import BrokerageApi from '@/sheep/api/trade/brokerage';
  import { fen2yuan } from '../../sheep/hooks/useGoods';

  const statusBarHeight = sheep.$platform.device.statusBarHeight * 2;
  const headerBg = sheep.$url.static('/static/images/background.png');

  onPageScroll((e) => {
    state.scrollTop = e.scrollTop <= 100;
  });

  const state = reactive({
    totals: 0, // 累计推广订单（单）
    scrollTop: false,

    currentTab: 0,
    loadStatus: '',
    pagination: {
      list: [],
      total: 0,
      pageNo: 1,
      pageSize: 10,
    },
  });

  const tabMaps = [
    {
      name: '全部',
      value: 'all',
    },
    {
      name: '待结算',
      value: '0', // 待结算
    },
    {
      name: '已结算',
      value: '1', // 已结算
    },
  ];

  // 切换选项卡
  function onTabsChange(e) {
    resetPagination(state.pagination);
    state.currentTab = e.index;
    getOrderList();
  }

  // 获取订单列表
  async function getOrderList() {
    state.loadStatus = 'loading';
    let { code, data } = await BrokerageApi.getBrokerageRecordPage({
      pageSize: state.pagination.pageSize,
      pageNo: state.pagination.pageNo,
      bizType: 1, // 获得推广佣金
      status: state.currentTab > 0 ? state.currentTab : undefined,
    });
    if (code !== 0) {
      return;
    }
    state.pagination.list = _.concat(state.pagination.list, data.list);
    state.pagination.total = data.total;
    state.loadStatus = state.pagination.list.length < state.pagination.total ? 'more' : 'noMore';
    if (state.currentTab === 0) {
      state.totals = data.total;
    }
  }

  onLoad(() => {
    getOrderList();
  });

  // 加载更多
  function loadMore() {
    if (state.loadStatus === 'noMore') {
      return;
    }
    state.pagination.pageNo++;
    getOrderList();
  }

  // 上拉加载更多
  onReachBottom(() => {
    loadMore();
  });
</script>

<style lang="scss" scoped>
  .header-box {
    box-sizing: border-box;
    padding: 0 20rpx 20rpx 20rpx;
    width: 750rpx;
    background-color: #D74532;
    background-size: 750rpx 100%;

    // 团队信息总览
    .team-data-box {
      .data-card {
        width: 305rpx;
        background: #ffffff;
        border-radius: 20rpx;
        padding: 20rpx;

        .total-item {
          margin-bottom: 30rpx;

          .item-title {
            font-size: 24rpx;
            font-weight: 500;
            color: #999999;
            line-height: normal;
            margin-bottom: 20rpx;
          }

          .total-num {
            font-size: 38rpx;
            font-weight: 500;
            color: #333333;
            font-family: OPPOSANS;
          }
        }

        .category-num {
          font-size: 26rpx;
          font-weight: 500;
          color: #333333;
          font-family: OPPOSANS;
        }
      }
    }

    // 直推
    .direct-box {
      margin-top: 20rpx;

      .direct-item {
        width: 340rpx;
        background: #ffffff;
        border-radius: 20rpx;
        padding: 20rpx;
        box-sizing: border-box;

        .item-title {
          font-size: 22rpx;
          font-weight: 500;
          color: #999999;
          margin-bottom: 6rpx;
        }

        .item-value {
          font-size: 38rpx;
          font-weight: 500;
          color: #333333;
          font-family: OPPOSANS;
        }
      }
    }
  }

  // 订单
  .order-box {
    .order-item {
      background: #ffffff;
      border-radius: 10rpx;
      margin: 20rpx;

      .order-footer {
        padding: 20rpx;
        font-size: 24rpx;
        color: #999;
      }

      .order-header {
        .no-box {
          padding: 20rpx;

          .order-code {
            font-size: 26rpx;
            font-weight: 500;
            color: #333333;
          }

          .order-state {
            font-size: 26rpx;
            font-weight: 500;
            color: var(--ui-BG-Main);
          }
        }

        .order-from {
          padding: 20rpx;

          .from-user {
            font-size: 30rpx;
            font-weight: 400;
            color: #666666;

            .user-avatar {
              width: 40rpx;
              height: 40rpx;
              border-radius: 50%;
              margin-right: 8rpx;
            }

            .user-name {
              font-size: 24rpx;
              font-weight: 400;
              color: #999999;
            }
          }

          .order-time {
            font-size: 24rpx;
            font-weight: 400;
            color: #999999;
          }
        }
      }

      .commission-box {
        .name {
          font-size: 24rpx;
          font-weight: 400;
          color: #999999;
        }
      }

      .commission-num {
        font-size: 30rpx;
        font-weight: 500;
        color: $red;
        font-family: OPPOSANS;

        &::before {
          content: '￥';
          font-size: 22rpx;
        }
      }

      .order-status {
        line-height: 30rpx;
        padding: 0 10rpx;
        border-radius: 30rpx;
        margin-left: 20rpx;
        font-size: 24rpx;
        color: var(--ui-BG-Main);
      }
    }
  }
</style>
