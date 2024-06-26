export function Analytics() {
	const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;

	return token ? (
		<script
			src="https://beamanalytics.b-cdn.net/beam.min.js"
			data-token={token}
			async
		/>
	) : null;
}