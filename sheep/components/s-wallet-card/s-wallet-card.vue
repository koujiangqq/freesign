<!-- 装修用户组件：用户资产 -->
<template>
	<view class="ss-wallet-menu-wrap ss-flex ss-col-center">
		<view class="menu-item ss-flex-1 ss-flex-col ss-row-center ss-col-center"
			@tap="sheep.$router.go('/pages/index/iou')">
			<view class="value-box ss-flex ss-col-bottom">
				<view class="value-text">{{ fen2yuan(userWallet.receiptsPending) || '0.00' }}</view>
				<view class="unit-text ss-m-l-6">元</view>
			</view>
			<view class="menu-title ss-m-t-28">待收款</view>
		</view>
		<view class="menu-item ss-flex-1 ss-flex-col ss-row-center ss-col-center" @tap="
        sheep.$router.go('/pages/index/iou')
      ">
			<view class="value-box ss-flex ss-col-bottom">
				<view class="value-text">{{ fen2yuan(userWallet.toBeRepaid) || '0.00' }}</view>
				<view class="unit-text ss-m-l-6">元</view>
			</view>
			<view class="menu-title ss-m-t-28">待还款</view>
		</view>
    <view class="menu-item ss-flex-1 ss-flex-col ss-row-center ss-col-center"
          @tap="sheep.$router.go('/pages/commission/wallet')">
      <view class="value-box ss-flex ss-col-bottom">
        <view class="value-text ss-line-1">{{ fen2yuan(userWallet.balance) || '0.00' }}</view>
        <view class="unit-text ss-m-l-6">元</view>
      </view>
      <view class="menu-title ss-m-t-28">账户余额</view>
    </view>
<!--		<view class="menu-item ss-flex-col ss-row-center ss-col-center menu-wallet"-->
<!--          @tap="sheep.$router.go('/pages/user/wallet/money')">-->
<!--			<image class="item-icon" :src="sheep.$url.static('/static/img/shop/user/wallet_icon.png')" mode="aspectFit" />-->
<!--			<view class="menu-title ss-m-t-30">我的钱包</view>-->
<!--		</view>-->
    <view class="menu-item ss-flex-col ss-row-center ss-col-center menu-wallet"
          @tap="sheep.$router.go('/pages/commission/wallet')">
      <image class="item-icon" :src="sheep.$url.static('/static/img/shop/user/wallet_icon.png')" mode="aspectFit" />
      <view class="menu-title ss-m-t-30">我的钱包</view>
    </view>
	</view>
</template>

<script setup>
	/**
	 * 装修组件 - 订单菜单组
	 */
	import { computed } from 'vue';
	import sheep from '@/sheep';
  import { fen2yuan } from '../../hooks/useGoods';

	const userWallet = computed(() => sheep.$store('user').userWallet);
	const userInfo = computed(() => sheep.$store('user').userInfo);
	const numData = computed(() => sheep.$store('user').numData);
</script>

<style lang="scss" scoped>
	.ss-wallet-menu-wrap {
		.menu-wallet {
			width: 144rpx;
		}

		.menu-item {
			height: 160rpx;

			.menu-title {
				font-size: 24rpx;
				line-height: 24rpx;
				color: #333333;
			}

			.item-icon {
				width: 44rpx;
				height: 44rpx;
			}

			.value-box {
				height: 50rpx;
				text-align: center;

				.value-text {
					font-size: 28rpx;
					color: #000000;
					line-height: 28rpx;
					vertical-align: text-bottom;
					font-family: OPPOSANS;
				}

				.unit-text {
					font-size: 24rpx;
					color: #343434;
					line-height: 24rpx;
				}
			}
		}
	}
</style>

