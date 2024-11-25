<template>
    <div class="divider">
        <h2>
            JSPS科研費基盤研究（S）
        </h2>
        <h2>
            研究概要
        </h2>
        <div>
            日本列島に関わる史料を時代横断・地域横断の観点で分析可能なデータとして蓄積・管理・共有し，
            これを過去から現在を，多々の分野をシームレスにつなぐデータインフラストラクチャとして成長させ，
            日本列島記憶継承モデルの確立を目指す.
        </div>
        <div>
            キーワード： ⽇本史、史料、データインフラストラクチャ、データ駆動型、異分野融合
        </div>
    </div>
</template>

<style scoped>
@media (min-width: 906px) {
	.divider {
		/*display: flex;*/
		justify-content: space-between;
		width: 906px;
		margin: 20px auto;
		padding-top: 84px;
	}

	.container {
		width: 906px;
	}

	.aside {
		margin: 20px auto;
		width: 906px;
	}
}

@media (min-width: 820px) and (max-width: 906px) {
	.divider {
		margin: 20px auto 0;
		width: 740px;
		padding-top: 112px;
	}

	.aside {
		margin-top: 60px;
	}
}

@media (max-width: 820px) {
	.divider {
		margin: 20px 0 0;
		padding: 0 20px;
		padding-top: 112px;
		width: 100%;
	}

	.aside {
		margin-top: 60px;
		width: 100%;
	}
}
</style>
